// UTILS
import { generateEmail, generatePassword } from '../utils/util.ts';
import { Request } from 'express';
import { HttpError } from '../interfaces/httpError.ts';
import bcrypt from 'bcryptjs';

// SCHEMA
import { loginResponseModel, enrollModel, enrollResponseModel } from './_schema.ts';

// PRISMA
import client from '../../prisma/instance.ts';

const authService = {
  async loginUser(req: Request): Promise<loginResponseModel> {
    const { email, password } = req.body;

    const student = await client.student.findFirst({ where: { email: email } });

    if (!student) {
      const err = new Error('Email not found') as HttpError; // Type Assertion and Augmentation
      err.statusCode = 404;
      throw err;
    }

    if (!(await bcrypt.compare(password, student.password))) {
      const err = new Error('Invalid password') as HttpError; // Type Assertion and Augmentation
      err.statusCode = 401;
      throw err;
    }

    return {
      accessToken: '1234',
      refreshToken: '1234',
      studentId: student.id,
    };
  },

  async enrollNewStudent(req: Request): Promise<enrollResponseModel> {
    const _enrollModel: enrollModel = req.body;

    const term = await client.term.findFirst({ where: { id: _enrollModel.termId } });
    if (!term) {
      const err = new Error('Term not found') as HttpError;
      err.statusCode = 404;
      throw err;
    }

    // create guardians
    let studentGuardian = await client.guardian.findFirst({ where: { name: _enrollModel.guardianName } });
    if (!studentGuardian) {
      studentGuardian = await client.guardian.create({ data: { name: _enrollModel.guardianName } });
    }

    // generate default email
    const studentEmail = await generateEmail(_enrollModel.firstName, _enrollModel.lastName);

    // Check email if exists
    if (await client.student.findFirst({ where: { email: studentEmail } })) {
      const err = new Error('Student email already exist') as HttpError;
      err.statusCode = 409;
      throw err;
    }

    // generate default password
    const studentPassword = await bcrypt.hash(generatePassword(), 10);

    const studentAccount = await client.student.create({
      data: {
        firstName: _enrollModel.firstName,
        lastName: _enrollModel.lastName,
        age: _enrollModel.age,
        gender: _enrollModel.gender,
        guardianId: studentGuardian.id,
        email: studentEmail,
        password: studentPassword,
      },
    });

    // create student-level record
    const studentLevel = await client.studentLevel.create({ data: { studentId: studentAccount.id, levelId: _enrollModel.yearLevel } });

    // enroll subjects
    for (const course of _enrollModel.courses) {
      await client.enrollment.create({
        data: { studentId: studentAccount.id, courseName: course, termId: _enrollModel.termId },
      });
    }

    // enrollment bill
    const studentTuitionBill = await client.tuitionBill.create({
      data: {
        total: _enrollModel.courses.length * 500.0,
        studentId: studentAccount.id,
        termId: _enrollModel.termId,
        schoolYearId: term.schoolYearId,
      },
    });

    const enrollmentDate = new Date().toString();

    return {
      schoolYear: _enrollModel.schoolYear,
      term: term.name,
      yearLevelId: studentLevel.levelId,
      studentId: studentAccount.id,
      firstName: studentAccount.firstName,
      lastName: studentAccount.lastName,
      email: studentAccount.email,
      enrollmentDate: enrollmentDate,
      tuitionBillId: studentTuitionBill.id,
    };
  },
};

export default authService;

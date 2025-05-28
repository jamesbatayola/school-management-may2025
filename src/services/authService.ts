// MODELS
import SchoolYear from "../models/SchoolYear.ts";
import Student from "../models/Student.ts";
import Guardian from "../models/Guardian.ts";
import Enrollment from "../models/Enrollment.ts";
import StudentLevel from "../models/StudentLevel.ts";

// UTILS
import { generateEmail } from "../utils/generateEmail.ts";
import { defaultPassword } from "../utils/generatePassword.ts";

import { Request } from "express";
import { HttpError } from "../interfaces/httpError.ts";
import bcrypt from "bcryptjs";

import { loginResponseModel, enrollModel, enrollResponseModel } from "./_schema.ts";
import enrollmentBill from "../models/EnrollmentBill.ts";

const authService = {
	async loginUser(req: Request): Promise<loginResponseModel> {
		const { email, password } = req.body;

		const student = await Student.findByEmail(email);

		if (!student) {
			const err = new Error("Email not found") as HttpError; // Type Assertion and Augmentation
			err.statusCode = 404;
			throw err;
		}

		if (!(await bcrypt.compare(password, student.password))) {
			const err = new Error("Invalid password") as HttpError; // Type Assertion and Augmentation
			err.statusCode = 401;
			throw err;
		}

		return {
			accessToken: "1234",
			refreshToken: "1234",
			studentId: student.student_id,
		};
	},

	async enrollNewStudent(req: Request): Promise<enrollResponseModel> {
		const _enrollModel: enrollModel = req.body;

		console.log("A");

		// create guardians
		const studentGuardian = await Guardian.findOrCreate(_enrollModel.guardianInfo[0], _enrollModel.guardianInfo[1]);

		const studentEmail = await generateEmail(_enrollModel.firstName, _enrollModel.lastName);

		// email duplicate check
		if (await Student.findByEmail(studentEmail)) {
			const err = new Error("Student email already exist") as HttpError;
			err.statusCode = 409;
			throw err;
		}

		// generate password (default)
		const studentPassword = defaultPassword();

		const studentAccount = await Student.create(
			_enrollModel.firstName,
			_enrollModel.lastName,
			_enrollModel.gender,
			studentEmail,
			studentGuardian.id,
			studentPassword
		);

		console.log("B");

		console.log(studentAccount.student_id);

		// create student-level record
		const studentLevel = await StudentLevel.create(_enrollModel.yearLevelId, studentAccount.student_id);

		console.log("B.1");

		let enrollmentDate = "";

		// enroll subjects
		for (const course of _enrollModel.courses) {
			const enrollment = await Enrollment.create(studentAccount.student_id, course);
			await enrollmentBill.create(enrollment.id);

			if (!enrollmentDate) {
				enrollmentDate = enrollment.enrolled_date;
			}
		}

		console.log("B.2");

		console.log("C");

		return {
			studentId: studentAccount.student_id,
			firstName: studentAccount.firstName,
			lastName: studentAccount.lastName,
			email: studentAccount.email,
			levelId: studentLevel.levelId,
			enrollmentDate: enrollmentDate,
			schooYearId: (await SchoolYear.getCurrentYear()).id,
		};
	},

	// async enrollStudent(req: Request): Promise<enrollResponseModel> {

	// }
};

export default authService;

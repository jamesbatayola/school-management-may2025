import Students from "../models/Student.ts";
import { Request } from "express";
import { HttpError } from "../interfaces/httpError.ts";
import bcrypt from "bcryptjs";

import { loginResponseModel, enrollModel, enrollResponseModel } from "./_schema.ts";

const authService = {
	async loginUser(req: Request): Promise<loginResponseModel> {
		const { email, password } = req.body;

		const student = await Students.findByEmail(email);

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
		const enrollModel: enrollModel = req.body;
	},
};

export default authService;

// PRISMA
import client from "../../prisma/instance.ts";
import kleur from "kleur";

import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "./_schema.ts";

const studentController = {
	async getStudentCourses(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
            const result = await client.student.findMany
		} catch (err) {
			console.log(kleur.bgRed("ERROR OCCURRED WHILE FETCHING STUDENT COURSES"));
			next(err);
		}
	},
};

export default studentController;

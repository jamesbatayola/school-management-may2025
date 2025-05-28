import { UUID } from "crypto";
import db from "../database/index.ts";

interface studentModel {
	id: number;
	student_id: string;
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	gender: string;
	password: string;
	created_at: string;
	updated_at: string;
}

const student = {
	async create(firstName: string, lastName: string, gender: string, email: string, guardianId: number, password: string): Promise<studentModel> {
		const query = `
			INSERT INTO students (first_name, last_name, gender, email, guardian_id, password)
			VALUES ($1, $2, $3, $4, $5, $6)
			RETURNING *;
		`;

		const res = await db.query(query, [firstName, lastName, gender, email, guardianId, password]);

		return res.rows[0];
	},

	async findAll(): Promise<studentModel[]> {
		const query = `
			SELECT * FROM students;
		`;

		const res = await db.query(query);
		return res.rows;
	},

	async findByEmail(email: string): Promise<studentModel> {
		const query = `
			SELECT * FROM students
			WHERE email = $1;
		`;

		const res = await db.query(query, [email]);

		return res.rows[0];
	},

	async findById(student_id: string): Promise<studentModel> {
		const query = `
			SELECT * FROM students
			WHERE student_id = $1;
		`;

		const res = await db.query(query, [student_id]);
		return res.rows[0];
	},

	async remove(id: string) {
		const query = `
			DELETE * FROM students
			WHERE id = $1
			RETURNING *;
		`;

		const res = await db.query(query, [id]);
		return res.rows[0];
	},
};

export default student;

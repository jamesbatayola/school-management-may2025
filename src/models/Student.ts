import db from "../database/index.ts";

interface Student {
	id: string;
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	gender: string;
}

const student = {
	async findAll(): Promise<Student[]> {
		const query = `
			SELECT * FROM students;
		`;
		const res = await db.query(query);
		return res.rows;
	},

	async create(firstName: string, lastName: string, email: string, gender: string): Promise<Student> {
		const query = `
			INSERT INTO students
			VALUES (firstName)
			RETURNING *;
		`;
		const res = await db.query(query, [firstName, lastName, email, gender]);
		return res.rows[0];
	},
};

export default student;

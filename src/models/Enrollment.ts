import { UUID } from "crypto";
import db from "../database/index.ts";

const enrollment = {
	async create(student_id: UUID, course_id: number) {
		const query = `
            INSERT INTO enrollments
            VALUES ($1, $2)
            RETURNING *;
        `;

		const res = await db.query(query, [student_id, course_id]);
		return res.rows[0];
	},
};

export default enrollment;

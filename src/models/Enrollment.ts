import { UUID } from "crypto";
import db from "../database/index.ts";

const enrollment = {
	async create(student_id: UUID) {
		const query = `
            INSERT INTO enrollments
            VALUES ($1, $2, $3)
            RETURNING *;
        `;

		const res = await db.query(query, [student_id]);
		return res.rows[0];
	},
};

export default enrollment;

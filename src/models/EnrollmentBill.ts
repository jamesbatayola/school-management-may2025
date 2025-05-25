import db from "../database/index.ts";

const enrollmentBill = {
	async create(enrollment_id: number) {
		const query = `
            INSERT INTO enrollments
            VALUES ($1)
            RETURNING *;
        `;

		const res = await db.query(query, [enrollment_id]);
		return res.rows[0];
	},
};

export default enrollmentBill;

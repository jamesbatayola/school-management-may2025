import db from "../database/index.ts";

interface enrollmentBillModel {
	id: number;
	enrollment_id: number;
	bill_status: string;
	due_date: string;
	created_at: string;
	updated_at: string;
}

const enrollmentBill = {
	async create(enrollment_id: number): Promise<enrollmentBillModel> {
		const query = `
            INSERT INTO enrollment_bills (enrollment_id)
            VALUES ($1)
            RETURNING *;
        `;

		const res = await db.query(query, [enrollment_id]);
		return res.rows[0];
	},
};

export default enrollmentBill;

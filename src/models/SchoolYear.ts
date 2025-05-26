import db from "../database/index.ts";

const schoolYear = {
	async findById(id: number) {
		const query = `
            SELECT *
            WHERE ID = $1;
        `;

		const res = await db.query(query, [id]);
		return res.rows[0];
	},
};

export default schoolYear;

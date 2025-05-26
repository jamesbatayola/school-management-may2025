import db from "../database/index.ts";

const level = {
	async findById(id: number) {
		const query = `
            SELECT * 
            WHERE id = $1;
        `;

		const res = await db.query(query, [id]);
		return res.rows[0];
	},
};

export default level;

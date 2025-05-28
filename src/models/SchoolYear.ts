import db from "../database/index.ts";

interface schoolYearModel {
	id: number;
	yearName: string;
	yearStart: string;
	yearEnd: string;
	created_at: string;
	updated_at: string;
}

const schoolYear = {
	async getCurrentYear(): Promise<schoolYearModel> {
		const query = `
			SELECT *
			FROM school_years
			ORDER BY id DESC
			LIMIT 1;
		`;

		const res = await db.query(query);
		return res.rows[0];
	},

	async findById(id: number): Promise<schoolYearModel> {
		const query = `
            SELECT *
			FROM school_years
            WHERE id = $1;
        `;

		const res = await db.query(query, [id]);
		return res.rows[0];
	},
};

export default schoolYear;

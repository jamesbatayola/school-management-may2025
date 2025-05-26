import db from "../database/index.ts";

interface guardianModel {
	id: number;
	name: string;
	phone: string;
}

const guardian = {
	async create(name: string, phone: string): Promise<guardianModel> {
		const query = `
            INSERT INTO guardians
            VALUES ($1, $2)
            RETURNING *;    
        `;

		const res = await db.query(query, [name, phone]);
		return res.rows[0];
	},

	async find(phone: string): Promise<guardianModel> {
		const query = `
			SELECT * 
			FROM guardians
			WHERE phone = $1;
		`;

		const res = await db.query(query, [phone]);
		return res.rows[0];
	},

	async findOrCreate(name: string, phone: string): Promise<guardianModel> {
		const _toFind = await this.find(phone);

		if (!_toFind) {
			return await this.create(name, phone);
		}

		return _toFind;
	},
};

export default guardian;

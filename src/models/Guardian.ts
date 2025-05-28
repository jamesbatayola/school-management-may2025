import db from "../database/index.ts";

interface guardianModel {
	id: number;
	name: string;
	phone: string;
}

const guardian = {
	async create(name: string, phone_number: string): Promise<guardianModel> {
		const query = `
            INSERT INTO guardians (name, phone_number)
            VALUES ($1, $2)
            RETURNING *;    
        `;

		const res = await db.query(query, [name, phone_number]);

		return res.rows[0];
	},

	async find(phone_number: string): Promise<guardianModel> {
		const query = `
			SELECT * 
			FROM guardians
			WHERE phone_number = $1;
		`;

		const res = await db.query(query, [phone_number]);
		return res.rows[0];
	},

	async findOrCreate(name: string, phone_number: string): Promise<guardianModel> {
		const _toFind = await this.find(phone_number);

		if (!_toFind) {
			return await this.create(name, phone_number);
		}

		return _toFind;
	},
};

export default guardian;

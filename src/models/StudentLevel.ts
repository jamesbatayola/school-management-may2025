import db from "../database/index.ts";
import { UUID } from "crypto";

interface studentYearLevelModel {
	id: number;
	levelId: number;
	studentId: UUID;
}

const studentLevel = {
	async create(levelId: number, studentId: string): Promise<studentYearLevelModel> {
		const query = `
            INSERT INTO student_levels (level_id, student_id)
            VALUES ($1, $2)
            RETURNING *;
        `;

		const res = await db.query(query, [levelId, studentId]);
		return res.rows[0];
	},

	async findById(id: number): Promise<studentYearLevelModel> {
		const query = `
            SELECT *
            FROM student_levels
            WHERE id = $1;
        `;

		const res = await db.query(query, [id]);
		return res.rows[0];
	},
};

export default studentLevel;

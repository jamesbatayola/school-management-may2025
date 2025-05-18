import pg from "pg";
const { Client } = pg;

import dotenv from "dotenv";
dotenv.config();

export default new Client({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

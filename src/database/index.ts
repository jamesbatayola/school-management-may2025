import pg from "pg";
const { Client } = pg;

import dotenv from "dotenv";
dotenv.config();

export default new Client(process.env.DATABASE_URL);

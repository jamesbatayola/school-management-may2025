import express, { Request, Response, NextFunction, Express } from "express";
import { Server } from "http";
import kleur from "kleur";

// --- DATABASE CONFIG --- //

import client from "./database/index.ts";

const app: Express = express();

import dotenv from "dotenv";
dotenv.config();

// custom error object to use status code
interface HttpError extends Error {
	statusCode: number;
}

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
	res.status(err.statusCode || 500).json({
		message: err.message || "UNKONWN ERROR",
		stack: err.stack || "NO STACK",
	});
});

// --- DATABASE CONNECTION --- //

try {
	await client.connect();
	console.log(kleur.bgWhite("DATABASE CONNECTED SUCCESSFULLY"));
} catch (err) {
	console.log(kleur.bgRed("ERROR OCCURED WHILE RUNNING SERVER"));
	console.log(err);
}

// --- SERVER INITIALIZATION --- //

let server: Server;

try {
	server = app.listen(process.env.SERVER_PORT);
	console.log(kleur.bgGreen(`RUNNING ON PORT ${process.env.SERVER_PORT}`));
} catch (err) {
	console.log(kleur.bgRed("ERROR OCCURED WHILE RUNNING SERVER"));
	console.log(err);
}

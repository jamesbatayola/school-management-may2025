import express, { Request, Response, NextFunction, Express } from "express";
import { Server } from "http";
import dotenv from "dotenv";
import kleur from "kleur";

// custom error object to use status code
import { HttpError } from "./interfaces/httpError.ts";
import { formatError } from "./utils/formatError.ts";

// --- DATABASE CONFIG --- //

import client from "./database/index.ts";

dotenv.config();

const app: Express = express();

app.use(express.json());

// --- ROUTES --- //
import authRoutes from "./routes/authRoutes.ts";
import testRoutes from "./routes/testRoutes.ts";

app.use("/auth", authRoutes);
app.use("/test", testRoutes);

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
	res.status(err.statusCode || 500).json({
		message: err.message || "UNKONWN ERROR",
		stack: err.stack ? formatError(err.stack) : "NO STACK",
	});
});

// --- DATABASE CONNECTION --- //

try {
	await client.connect();
	console.log(kleur.bgWhite("DATABASE CONNECTED SUCCESSFULLY"));
} catch (err) {
	console.log(kleur.bgRed("ERROR OCCURED CONNECTING TO DATABASE"));
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

// --- GRACEFUL SHUTDOWN --- //

const shutdown = () => {
	server.close(() => {
		console.log(kleur.bgRed("SERVER CLOSED"));
		process.exit(0);
	});
};

process.on("SIGINT", shutdown);
process.on("SIGTSTP", shutdown);

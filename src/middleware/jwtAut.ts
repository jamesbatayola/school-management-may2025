import dotenv from "dotenv/config";
dotenv.config();

import { Request } from "express";
import { HttpError } from "../interfaces/httpError.ts";
import jwt from "jsonwebtoken";

export async function jwtAuth(req: Request): Promise<jwt.JwtPayload> {
	const jwtCookie = req.cookies.jwt;

	if (!jwtCookie) {
		const error = new Error("JWT not found in cookies") as HttpError;
		error.statusCode = 404;
		throw error;
	}

	let decodedToken;

	try {
		decodedToken = jwt.verify(jwtCookie, process.env.JWT_SECRET as string) as jwt.JwtPayload;
	} catch (err) {
		if (err instanceof jwt.JsonWebTokenError) {
			const error = new Error("Invalid JWT") as HttpError;
			error.statusCode = 401;
			throw error;
		}
	}

	if (!decodedToken || !decodedToken.userId) {
		const error = new Error("JWT does not contain userId") as HttpError;
		error.statusCode = 400;
		throw error;
	}

	return {
		jwt: decodedToken.jwtSecret,
		userId: decodedToken.userId,
	};
}

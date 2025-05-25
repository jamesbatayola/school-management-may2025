import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "./_schema.ts";
import { loginResponseModel } from "../services/_schema.ts";
import authService from "../services/authService.ts";
import kleur from "kleur";

const authController = {
	async postLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const result: loginResponseModel = await authService.loginUser(req);

			const response: ApiResponse<loginResponseModel> = {
				status: "success",
				message: "Hello world",
				data: result,
			};

			console.log(kleur.bgGreen("LOGIN SUCCESSFUL"));
			res.json(response);
		} catch (err) {
			console.log(kleur.bgRed("LOGIN FAILED"));
			next(err);
		}
	},

	async postEnroll(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			// const result: signupResponseModel = await authService.signupUser(req);
		} catch (err) {
			next(err);
		}
	},
};

export default authController;

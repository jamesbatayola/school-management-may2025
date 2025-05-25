import { z } from "zod";

export interface loginResponseModel {
	accessToken: string;
	refreshToken?: string;
	studentId: string;
}

// export interface enrollResponseModel {}

export interface enrollModel {
	firstName: string;
	lastName: string;
	gender: string;
	guardianInfo: string[];
	courses: string[];
}

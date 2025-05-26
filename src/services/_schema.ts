import { UUID } from "crypto";
import { z } from "zod";

export interface loginResponseModel {
	accessToken: string;
	refreshToken?: string;
	studentId: string;
}

export interface enrollResponseModel {
	studentId: UUID;
	firstName: string;
	lastName: string;
	email: string;
	level: string;
	enrollmentDate: string;
}

export interface enrollModel {
	schoolYearId: number;
	firstName: string;
	lastName: string;
	gender: string;
	guardianInfo: string[];
	yearLevelId: number;
	courses: number[];
}

export interface loginResponseModel {
	accessToken: string;
	refreshToken?: string;
	studentId: string;
}

export interface enrollResponseModel {
	studentId: string;
	firstName: string;
	lastName: string;
	email: string;
	levelId: number;
	enrollmentDate: string;
	schooYearId: number;
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

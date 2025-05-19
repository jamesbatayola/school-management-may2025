import express, { Router } from "express";
const router: Router = express.Router();

import student from "../models/Student.ts";

router.get("/test", (req, res): void => {
	console.log("TEST!");
	res.send("<h1>TEST</h1>");
});

router.get("/students", async (req, res) => {
	const students = await student.findAll();
	res.json({ data: students });
});

export default router;

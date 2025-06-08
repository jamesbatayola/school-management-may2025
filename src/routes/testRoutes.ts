import express, { Router } from "express";
const router: Router = express.Router();

import client from "../../prisma/instance.ts";

router.get("/ping", (req, res): void => {
	console.log("TEST!");
	res.send("<h1>TEST</h1>");
});

router.get("/students", async (req, res) => {
	const students = await client.student.findMany();

	res.json({ data: students });
});

router.get("/student/:id", async (req, res) => {
	const studentSubjects = await client.student.findFirst({ where: { id: req.params.id } });

	res.json({ data: studentSubjects });
});

// router.get('/e')

export default router;

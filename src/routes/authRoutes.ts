import express from "express";
import authController from "../controllers/authController.ts";

const router = express.Router();

router.post("/login", authController.postLogin);

router.post("/enroll", authController.postEnroll);

export default router;

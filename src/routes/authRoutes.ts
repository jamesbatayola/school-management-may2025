import express from "express";
import authController from "../controllers/authController.ts";

const router = express.Router();

router.post("/login", authController.postLogin);

export default router;

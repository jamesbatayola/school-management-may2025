import express from "express";
import authController from "../controllers/authController.ts";

const router = express.Router();

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

router.get("/enroll", authController.getEnroll);
router.post("/enroll", authController.postEnroll);

export default router;

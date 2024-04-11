import express from "express";
import { signup, signin } from "../controller/authController.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/signup", signup);
router.post(
  "/signin",
  [body("email").isEmail(), body("desc").trim().isLength({ min: 5, max: 100 })],
  signin
);

export default router;

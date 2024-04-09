import express, { application } from "express";
import { getStock, createStock } from "../controller/routeController.js";
import { body } from "express-validator";

const router = express.Router();

// GET http://localhost:3000/stock
router.get("/", getStock);

// POST http://localhost:3000/stock
router.post(
  "/",
  [
    body("brand").trim().isLength({ max: 20, min: 2 }),
    body("desc").trim().isLength({ min: 5, max: 100 }),
  ],
  createStock
);

export default router;

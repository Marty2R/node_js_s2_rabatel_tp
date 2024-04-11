import { Router } from "express";

import authRoutes from "./auth.js";
import stockRouter from "./stock.js";
import fileRouter from "./file.js";
import multer from "multer";

const router = Router();

// Routes
router.get("/", (request, response) => {
  response.json({ message: "Hello Word !" });
});

// Middelwares
router.use("/stock", stockRouter);
router.use("/auth", authRoutes);
router.use("/image", fileRouter);

export default router;

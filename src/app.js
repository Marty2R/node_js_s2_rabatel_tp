import express from "express";
import { handleUncaughtErrors } from "./middlewares/error.js";
import routes from "./routes/index.js";
import multer from "multer";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export function CreateApp() {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use(handleUncaughtErrors);
  return app;
}

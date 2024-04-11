import "dotenv/config";
import mongoose from "mongoose";
import { CreateApp } from "./app.js";
import multer from "multer";

const PORT = process.env.PORT || 3001;

const MONGO_STRING = process.env.MONGO_STRING;

const app = CreateApp();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/photos/upload", upload.array("photos", 12), (req, res, next) => {
  const fileNames = req.files.map((file) => file.filename);
  res.send(fileNames);
});

mongoose.connect(MONGO_STRING).then(() => {
  console.log("Connected to the database !");

  // On lance le serveur :
  app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
  });
});

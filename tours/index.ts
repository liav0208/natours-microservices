import dotenv from "dotenv";
import mongoose from "mongoose";

import { app } from "./app";

dotenv.config();

(async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.info("Tours connect successfully to mongoose");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
})();

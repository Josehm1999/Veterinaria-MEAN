import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";

import animalRoutes from "./routes/animal.route.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/animal/", animalRoutes);
app.use("/api/user/", userRoutes);

app.listen(process.env.PORT, () => {
  db.dbConnection();
  console.log(`App running on port: ${process.env.PORT}`);
});

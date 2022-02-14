import express from "express";

import {
  adoption,
  getAnimals,
  registerAnimal,
} from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/registerAnimal", registerAnimal);
router.post("/adoption", adoption);
router.get("/", getAnimals);
export default router;

import express from "express";

import { getUsers, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/registerUser", registerUser);
router.get("/", getUsers);
export default router;

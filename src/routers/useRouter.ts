import express from "express";
import { handleGetUsers } from "../controlers/userController";

const router = express.Router();

router.get("/all", handleGetUsers);

export default router;
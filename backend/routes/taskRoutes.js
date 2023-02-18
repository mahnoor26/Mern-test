import express from "express";
import { createTask,getAllTasks, deleteTask } from "../Controller/taskController.js";

// Initializing Router
const router = express.Router();

// Get Route
router.post("/", createTask);
router.get("/", getAllTasks);
router.delete("/:id", deleteTask);

export default router;

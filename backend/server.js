import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDatabase } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

// Initializing App 
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
connectDatabase();

// Middleware
app.use(express.json());
app.use(bodyParser.json({limit: "38mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "38mb", extended: true}))
app.use(cors());

// Routes
app.use("/api/tasks", taskRoutes);

// Error Handler middleware
app.use(errorHandler);

// Starting Server
app.listen(port, ()=>{
    console.log(`Server Runnig on Port ${port}`);
})
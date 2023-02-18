import { response } from "express";
import asyncHandler from "express-async-handler";
import Task from "../models/Task.js";

// Method for getting all tasks
export const getAllTasks = asyncHandler(async(req,res) =>{
    const tasks = await Task.find();

    res.json({
        tasks,
    });
});

export const createTask = asyncHandler(async(req, res) =>{
    if(!req.body.text){
        res.status(400);
        throw new Error("Please fill out the field");
    }

    const task = await Task.create({
        text: req.body.text,
    });

    res.status(200).json(task);

})

// Method for deleting task
export const deleteTask = asyncHandler(async (request, response) => {
    const task = await Task.findById(request.params.id);
  
    if (!task) {
      response.status(400);
      throw new Error("Task not found");
    }
  
    await task.remove();
  
    response.status(200).json({ id: request.params.id });
  });
  



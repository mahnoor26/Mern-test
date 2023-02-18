import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Text field is required"],
        }
    }, 
    { timestamp: true}
);

export default mongoose.model("Task", taskSchema);

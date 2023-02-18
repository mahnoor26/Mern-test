import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const connectDatabase = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database Connected: ${conn.connection.host}`)
    }catch(error){
        console.log(error);
        process.exit(1);

    }
}
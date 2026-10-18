import mongoose from "mongoose";


const connectDB = async () => {
    const url = process.env.MONGO_URI;
    
    if(!url){
        throw new Error("Mongo DB url is not defined in environment variables.");
    }

    const conn = await mongoose.connect(url);

    console.log(`Mongo DB connected : ${conn.connection.host}/${conn.connection.name}`);

    return conn;
}

export default connectDB;
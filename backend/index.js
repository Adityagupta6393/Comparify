import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import express from "express";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/product", productRoutes);

const startServer = async () => {

    try{
        await connectDB();

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server is listensing on ${PORT}`);
        });
    }catch(err){
        console.log("Failed to connect server ", err.message);
        process.exit(1);
    }
    
}

startServer();
import mongoose from "mongoose";

async function connectDB() {
    try {
        if (mongoose.connections[0].readyState) return;

        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database');
    } catch (error) {
        console.error('Connection failed:', error.message); 
        // Log the actual error message for debugging
    }
}

export default connectDB;
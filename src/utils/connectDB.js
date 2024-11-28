import mongoose from "mongoose";

async function connectDB() {
    try {
        if(mongoose.connection[0].readyState) return;

        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to database')
    } catch (err) {
        console.log('connection failed')
    }
}

export default connectDB;
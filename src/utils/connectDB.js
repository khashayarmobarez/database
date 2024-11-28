import mongoose from "mongoose";

async function connectDB() {
    try {
        if(mongoose.connection[0].readyState) return;

        await mongoose.connect(proccess.env.MONGO_URI)
        console.log('connected to database')
    } catch (err) {
        console.log('connection failed')
    }
}

export default connectDB;
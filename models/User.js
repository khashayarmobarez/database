import { Schema, model, models } from "mongoose";

// schema
const  userSchema = new Schema({
    name: {
        type: String,
        minLength: 3
    },
    age: {
        type: Number,
        min: 10,
        max: 65
    },
    email: {
        type: String,
        required: true,
    },
    courses: [String],
    createdAt: {
        type: Date,
        // as a function so it gets the correct now time everytime
        default: () => Date.now
    }

})

// model
const User = models.User || model('User', userSchema);

export default User
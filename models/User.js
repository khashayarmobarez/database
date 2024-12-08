import { Schema, model, models } from "mongoose";

// schema
const  userSchema = new Schema({
    name: String,
})

// model
const User = models.User || model('User', userSchema);

export default User
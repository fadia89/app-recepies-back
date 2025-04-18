import mongoose from "mongoose";
const { Schema } = mongoose;



const userSchema = new Schema ({
    first_Name: {
        type: String,
        required: true
    },
    last_Name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    image : {
        type: String,
    },
    role : {
        type: String,
        enum:['admin', 'user'],
        default: 'user'
    }
})

export default mongoose.model('User', userSchema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    role: {type:String, enum: ['user', 'admin'], default: 'user'},
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    totalBookings: {type:Number, default:0},
    bookedEvents: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    status: {type:String, enum: ['active', 'inactive'], default: 'active'},
})

const User = mongoose.model("User", userSchema);

export default User;

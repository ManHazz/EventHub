import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    role: {type:String, enum: ['user', 'admin'], default: 'user'},
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    totalBookings: {type:Number, default:0},
    bookedEvents: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    status: {type:String, enum: ['active', 'inactive'], default: 'active'},
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model("User", userSchema);

export default User;

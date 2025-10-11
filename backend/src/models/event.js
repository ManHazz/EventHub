import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    bookingId: {type:String},
    name: {type:String},
    desccription: {type:String},
    date: {type:Date},
    time: {type:String},
    location: {type:String},
    price: {type:Number},
    totalSeats: {type:Number},
    status: {type:String, enum: ['confirm', 'pending'], default: 'pending'},

});

const Event = mongoose.model("Event", eventSchema);

export default Event;

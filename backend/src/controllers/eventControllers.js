import Event from '../models/event.js';
import User from '../models/user.js';

export const createEvent = async (req, res) => {
    try {
        const {bookingId, name, description, date, time, location, price, totalSeats} = req.body;
        const event = new Event({
            bookingId,
            name,
            description,
            date,
            time,
            location,
            price,
            totalSeats
        });
        await event.save();
        res.status(201).json({message: "Event created successfully", event});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const getUserEvents = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate("bookedEvents");
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }
        const events = await Event.find({bookingId: user.bookingId});
        res.status(200).json(events);

    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const allUser = await User.find({}).select('name').populate('bookedEvents', 'bookingId name date price status');
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        await Event.findByIdAndDelete(id);
        res.status(200).json({message: "Event deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookingId, name, description, date, time, location, price, totalSeats} = req.body;

        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        event.bookingId = bookingId || event.bookingId;
        event.name = name || event.name;
        event.description = description || event.description;
        event.date = date || event.date;
        event.time = time || event.time;
        event.location = location || event.location;
        event.price = price || event.price;
        event.totalSeats = totalSeats || event.totalSeats;

        await event.save();
        res.status(200).json({ message: "Event updated successfully", event });
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
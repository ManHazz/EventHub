import Event from '../models/event.js';
import User from '../models/user.js';

export const createEvent = async (req, res) => {
    try {
        const { name, description, date, time, location, price, totalSeats } = req.body;
        const event = new Event({
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
        const user = await User.findById(req.user.id).populate("bookedEvents");
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user.bookedEvents);

    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        if(events.length === 0) {
            return res.status(404).json({message: "No events available"});
        }
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const usersWithBookings = await User.find({ 
            bookedEvents: { $exists: true, $ne: [] } 
        })
        .select('name') 
        .populate({
            path: 'bookedEvents',
            select: 'bookingId name date price status' 
        });

        if (!usersWithBookings || usersWithBookings.length === 0) {
            return res.status(404).json({ message: "No book event yet" });
        }

        const allBookings = usersWithBookings.flatMap(user => 
            user.bookedEvents.map(event => ({
                bookingId: event.bookingId,
                userName: user.name,
                eventName: event.name,
                date: event.date,
                price: event.price,
                status: event.status
            }))
        );

        res.status(200).json(allBookings);

    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal server error" });
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

export const bookEvent = async (req, res) => {
    try {
        const {id} = req.params;

        const event = await Event.findById(id);
        if(!event) {
            return res.status(404).json({message: "Event not found"});
        }

        const user = await User.findById(req.user.id);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        if(user.bookedEvents.includes(event._id)) {
            return res.status(400).json({message: "Event already booked"});
        }

        user.bookedEvents.push(event._id);
        user.totalBookings += 1;
        event.totalSeats -= 1;
        if(event.totalSeats < 0) {
            return res.status(400).json({message: "No seats available"});
        }
        await user.save();

        event.status = 'confirm';
        await event.save();

        res.status(200).json({message: "Event booked successfully", event, user});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}
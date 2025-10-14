import express from 'express';
import { createEvent, getUserEvents, getAllEvents, deleteEvent, updateEvent, getAllBookings, bookEvent } from '../controllers/eventControllers.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/create', protect, createEvent); //create event
router.get('/userEvents', protect, getUserEvents); //get all events for a user(user dashboard)
router.get('/allEvents', protect, getAllEvents); //get all events(admin dashboard, display on homepage)
router.get('/allBookings', protect, getAllBookings); //get all users bookings (admin dashboard)
router.post('/book/:id', protect, bookEvent); //book event (id of event to be booked)
router.delete('/delete/:id', protect, deleteEvent); //delete event
router.put('/update/:id', protect, updateEvent); //update event

export default router;


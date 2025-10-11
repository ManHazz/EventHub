import express from 'express';
import { createEvent, getUserEvents, getAllEvents, deleteEvent, updateEvent } from '../controllers/eventControllers.js';


const router = express.Router();

router.post('/create', createEvent); //create event
router.get('/userEvents', getUserEvents); //get all events for a user(user dashboard)
router.get('/allEvents', getAllEvents); //get all events(admin dashboard)
router.delete('/delete/:id', deleteEvent); //delete event
router.put('/update/:id', updateEvent); //update event

export default router;


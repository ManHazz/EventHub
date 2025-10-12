import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser, getAllUserProfile } from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser); //register user
router.post('/login',loginUser); //login user
router.get('/profile', protect, getUserProfile); //get user profile
router.get('/allProfile', protect, getAllUserProfile); //get all user profile (for admin)
router.put('/profile/:id', protect, updateUserProfile); //update user profile
router.delete('/profile/:id', protect, deleteUser); //delete user

export default router;
import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/register', registerUser); //register user
router.post('/login', loginUser); //login user
router.get('/profile', getUserProfile); //get user profile
router.put('/profile', updateUserProfile); //update user profile
router.delete('/profile', deleteUser); //delete user

export default router;
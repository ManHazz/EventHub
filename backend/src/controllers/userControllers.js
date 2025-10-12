import dotenv from "dotenv";
dotenv.config();
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {
        const {email, password, name, confirmPassword} = req.body;
        if(!email || !password || !name || !confirmPassword) {
            return res.status(400).json({message: "All fields are required"});
        }

        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwords do not match"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const newUser = new User({email, password, name});
        await newUser.save();

        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid credentials"});
        }
        
        const isMatch = await user.matchPassword(password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});

        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                totalBookings: user.totalBookings,
                bookedEvents: user.bookedEvents,
                status: user.status
            }
        });
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}

export const getUserProfile = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const updateUserProfile = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteUser = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
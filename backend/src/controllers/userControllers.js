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

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)

        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const getAllUserProfile = async (req, res) => {
    
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "Forbidden: Admins only" });
    }

    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

// ...existing code...
export const updateUserProfile = async(req, res) => {
    try {
        if (req.user.id !== req.params.id && req.user.role !== 'admin') {
            return res.status(403).json({ message: "Forbidden: You can only update your own profile" });
        }

        const user = await User.findById (req.params.id);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        const {name, email, password, confirmPassword, status, role} = req.body;

        if(password && password !== confirmPassword) {
            return res.status(400).json({message: "Passwords do not match"});
        }

        user.name = name || user.name;
        user.email = email || user.email;
        if(password) {
            user.password = password;
        }
        
        if (req.user.role === 'admin') {
            if (role) user.role = role;
            if (status) user.status = status;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            message: "User profile updated successfully",
            user: {
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                status: updatedUser.status
            }
        });
        
    } catch (error) {
        console.error(error); // Log the actual error for debugging
        res.status(500).json({message: "Internal server error"});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        await user.remove();
        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}
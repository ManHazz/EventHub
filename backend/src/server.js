import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
});
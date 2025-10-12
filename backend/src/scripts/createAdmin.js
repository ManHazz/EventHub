import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/user.js';
import { connectDB } from '../config/db.js';

// Point to the .env file in the parent directory
dotenv.config({ path: '.env' });

const createAdminAccount = async () => {
    await connectDB();

    try {
        // --- DEFINE YOUR ADMIN DETAILS HERE ---
        const adminEmail = 'admin@eventhub.com';
        const adminPassword = 'aVeryStrongPassword123!';
        const adminName = 'Administrator';

        const adminExists = await User.findOne({ email: adminEmail });

        if (adminExists) {
            console.log('Admin user already exists.');
            return;
        }

        const admin = new User({
            name: adminName,
            email: adminEmail,
            password: adminPassword,
            role: 'admin', // Explicitly set the role
        });

        await admin.save();
        console.log('✅ Admin user created successfully!');
        console.log(`   Email: ${adminEmail}`);
        console.log(`   Password: [the one you set in the script]`);

    } catch (error) {
        console.error('❌ Error creating admin user:', error);
    } finally {
        // Close the database connection
        await mongoose.connection.close();
    }
};

createAdminAccount();
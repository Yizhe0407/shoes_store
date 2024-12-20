require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shoes_store', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Delete existing admin if any
    await Admin.deleteMany({});

    // Create admin user
    const admin = new Admin({
      username: 'admin',
      password: 'admin123',
      email: 'admin@example.com'
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log('Username:', admin.username);
    console.log('Password: admin123');
    console.log('Admin ID:', admin._id);
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdmin();

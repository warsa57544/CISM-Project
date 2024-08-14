const mongoose = require('mongoose');
require('dotenv').config(); // Ensure .env is loaded

const uri = process.env.DB_URI; // Retrieve URI from environment variables

if (!uri) {
  throw new Error('DB_URI is not defined in .env file');
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = {
  connectToDatabase,
};

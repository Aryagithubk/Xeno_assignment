const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, // Ensures proper parsing of the connection string
            useUnifiedTopology: true, // Enables the new connection management engine
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
const mongoose = require ('mongoose');

const connectDb =async function connectToDatabase() {
    try {
      
      await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to the database');
      // You can start interacting with the database here
    } catch (error) {
      console.error('Error connecting to the database', error);
    }
  }
  
  module.exports= connectDb;
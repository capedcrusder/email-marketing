
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// User schema
const newSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  
});

const collection=("collection",newSchema)
module.exports=collection



const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));
// 1. Connect to Database (Replace with your MongoDB URI)
const dbURI = 'mongodb+srv://raghavendratripathi895_db_user:Trip@1234567890@cluster0.zy69mhp.mongodb.net/?appName=Cluster0';
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// 2. Create a Schema (Example: Contact Form)
const ContactSchema = new mongoose.Schema({
  name: String,
  message: String
});
const Contact = mongoose.model('Contact', ContactSchema);

// 3. API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).send({ message: 'Success! Data saved to DB.' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));
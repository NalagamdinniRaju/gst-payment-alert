require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const invoiceRoutes = require('./routes/invoiceRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const cors = require('cors');
const settingsRoutes = require('./routes/settingsRoutes');
const seedData = require('./seedData');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001', // Replace with your React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() =>{
    console.log('Connected to MongoDB')
    seedData();
})
.catch(err => console.error('Error connecting to MongoDB:', err));



// Routes
app.use('/api', invoiceRoutes);
app.use('/api', reminderRoutes);
app.use('/api', settingsRoutes);

// Error handling middleware (add this after your routes)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
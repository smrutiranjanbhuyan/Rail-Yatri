
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
require('dotenv').config(); 

const UserRoute=require('./routes/user')

// Initialize the app
const app = express();

// Connect to the database
connectDB(process.env.URI);

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// Routes
app.get('/helloworld', (req, res) => {
  res.send('Hello world');
});
app.use('/api',UserRoute);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

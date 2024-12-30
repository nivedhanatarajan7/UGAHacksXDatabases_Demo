const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
const port = 8082;

// Use the items route module
const items = require("./routes/api/items");

// MongoDB connection string (replace 'link' with your actual MongoDB URI)
const connection = 'mongodb+srv://nn44605:<db_password>@ugahacksxdatabasetutori.vk6xm.mongodb.net/?retryWrites=true&w=majority&appName=UGAHacksXDatabaseTutorial';

// Use CORS middleware before routes
app.use(cors({ origin: true, credentials: true }));

// Middleware to parse JSON bodies
app.use(express.json({ extended: false }));

// Use the API routes for '/api/items'
app.use("/api/items", items);

// MongoDB connection setup
mongoose.set('strictQuery', false);
mongoose.connect(connection)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log("MongoDB connection is successful...");
  })
  .catch(err => {
    console.log("Error in MongoDB connection", err);
  });

//Remember to do npm install mongodb!
//Remember to do npm install cors!

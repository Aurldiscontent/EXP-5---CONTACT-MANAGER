// app.js
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require('./config/dbConnection'); // matches config/dbConnection.js

connectDB();

const app = express();
const PORT = 5000;

app.use(express.json());

// Routes
const contactRoutes = require('./routes/contactRoutes'); // matches routes/contactRoutes.js
app.use("/api/contacts", contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING AT PORT 5000");
});

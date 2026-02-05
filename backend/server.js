require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db.js")
const app = express();
connectDB();
app.get('/', (req, res) => {
  res.send('API is Running!');
});



app.listen(4000, () => {
  console.log(`Server started at port http://localhost:4000`);
});

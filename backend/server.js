require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db.js");
const route = require('./routes/restaurantRouter.js');
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is Running!');
});

app.use("/api/restaurants", route)

app.listen(4000, () => {
  console.log(`Server started at port http://localhost:4000`);
});

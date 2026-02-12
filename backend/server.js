require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db.js");
const restaurantRoute = require('./routes/restaurantRouter.js');
const AIRoute = require('./routes/aiRouter.js');
const foodRoutes = require('./routes/foodRouter.js');
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/foods', foodRoutes);

app.get('/', (req, res) => {
  res.send('API is Running!');
});

app.use("/api/restaurants", restaurantRoute)
app.use("/api/ai", AIRoute)

app.listen(4000, () => {
  console.log(`Server started at port http://localhost:4000`);
});

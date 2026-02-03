const Restaurant = require("../models/restaurantModel.js");

const getAllRestaurants = (req, res) => {
  res.json(Restaurant.getAll());
};

const createRestaurant = (req, res) => {
  const { street, city, postal_code, rating_list = [], items = [] } = req.body;

  const newRestaurant = Restaurant.addOne(street, city, postal_code, rating_list, items);

  if (newRestaurant) {
    res.status(201).json(newRestaurant);
  } else {
    res.status(400).json({ message: "Invalid restaurant data" });
  }
};

const getRestaurantById = (req, res) => {
  const restaurantId = req.params.restaurantId;
  const restaurant = Restaurant.findById(restaurantId);
  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ message: "Restaurant not found" });
  }
};

const updateRestaurant = (req, res) => {
  const restaurantId = req.params.restaurantId;
  const updateData = req.body;
  const updated = Restaurant.updateOneById(restaurantId, updateData);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ message: "Restaurant not found" });
  }
};

const newRating = (req, res) => {
  const restaurantId = req.params.restaurantId;
  const updateData = req.body;
  const updated = Restaurant.addRating(restaurantId, updateData)
  if (updated != null) {
    res.json(updated);
  }
}

const deleteRestaurant = (req, res) => {
  const restaurantId = req.params.restaurantId;
  const isDeleted = Restaurant.deleteOne(restaurantId);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Restaurant not found" });
  }
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  newRating
};

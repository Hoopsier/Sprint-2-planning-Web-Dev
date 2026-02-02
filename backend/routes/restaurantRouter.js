const express = require('express');
const router = express.Router();
const {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurantController');

router.get('/', getAllRestaurants);
router.get('/:restaurantId', getRestaurantById);
router.post('/', createRestaurant);
router.put('/:restaurantId', updateRestaurant);
router.delete('/:restaurantId', deleteRestaurant);

module.exports = router;

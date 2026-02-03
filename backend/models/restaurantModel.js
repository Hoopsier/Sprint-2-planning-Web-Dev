let resArray = []
let nextId = 1

/*
 * Object model:
 * id: int
 * street: string
 * city: string
 * postal_code: int
 * rating_list: double[] (0.0 - 5.0)
 * rating: double
 * items: Item[]
 */

const getAll = () => {
  return resArray;
};

const calculateAverageRating = (ratings) => {
  if (!Array.isArray(ratings) || ratings.length === 0) return 0.0;
  const nums = ratings.map(Number).filter(n => !Number.isNaN(n) && n >= 0 && n <= 5);
  if (nums.length === 0) return 0.0;
  const sum = nums.reduce((a, b) => a + b, 0);
  // keep two decimal places
  return Math.round((sum / nums.length) * 100) / 100;
};

const addOne = (street, city, postal_code, rating_list = [], items = []) => {
  if (!street || !city || !postal_code) {
    return false;
  }

  const safeRatings = Array.isArray(rating_list) ? rating_list.map(Number).filter(n => !Number.isNaN(n) && n >= 0 && n <= 5) : [];
  const rating = calculateAverageRating(safeRatings);

  const newRestaurant = {
    id: nextId++,
    street,
    city,
    postal_code,
    rating_list: safeRatings,
    rating,
    items,
  };

  resArray.push(newRestaurant);
  return newRestaurant;
};

const findById = (id) => {
  const restaurant = resArray.find((r) => r.id === Number(id));
  return restaurant || false;
};

const updateOneById = (id, updateData) => {
  const restaurant = findById(id);
  if (restaurant) {
    if (updateData.street) restaurant.street = updateData.street;
    if (updateData.city) restaurant.city = updateData.city;
    if (updateData.postal_code !== undefined) restaurant.postal_code = updateData.postal_code;
    if (updateData.items !== undefined) restaurant.items = updateData.items;

    if (updateData.rating_list !== undefined) {
      const safeRatings = Array.isArray(updateData.rating_list) ? updateData.rating_list.map(Number).filter(n => !Number.isNaN(n) && n >= 0 && n <= 5) : [];
      restaurant.rating_list = safeRatings;
      restaurant.rating = calculateAverageRating(safeRatings);
    }

    return restaurant;
  }
  return false;
};


const addRating = (id, updateData) => {
  const restaurant = findById(id)
  if (updateData.addRating !== undefined) {
    const r = Number(updateData.addRating);
    if (!Number.isNaN(r) && r >= 0 && r <= 5) {
      restaurant.rating_list = restaurant.rating_list || [];
      restaurant.rating_list.push(r);
      restaurant.rating = calculateAverageRating(restaurant.rating_list);
    }
    return restaurant
  }
  return null
}

const deleteOne = (id) => {
  const restaurant = findById(id);
  if (restaurant) {
    const initialLength = resArray.length;
    resArray = resArray.filter((r) => r.id != Number(id));
    return resArray.length < initialLength;
  }
  return false;
};

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOne,
  addRating,
  calculateAverageRating,
};


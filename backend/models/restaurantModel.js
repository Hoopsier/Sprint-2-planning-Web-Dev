let resArray = []
let nextId = 1

/*
 * Object model:
 * id: int
 * street: string
 * city: string
 * postal_code: int
 * items: Item[]
 */

const getAll = () => {
  return resArray;
};

const addOne = (street, city, postal_code, items = []) => {
  if (!street || !city || !postal_code) {
    return false;
  }

  const newRestaurant = {
    id: nextId++,
    street,
    city,
    postal_code,
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
    return restaurant;
  }
  return false;
};

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
};


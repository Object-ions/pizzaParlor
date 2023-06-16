// Buisness Logic:pepperoni
const basicPizzaSmall = 10;
const basicPizzaMedium = 12;
const basicPizzaLarge = 13;
const mushrooms = 0.5;
const onions = 0.5;
const peppers = 0.5;
const olives = 0.5;
const tomatoes = 0.5;
const pineapple = 1;
const artichoke = 1;
const pepperoni = 1.5;

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
};

function calcPrice(size, toppings) {
  let calcToppings;

  return size + toppings
}

// UI Logic:
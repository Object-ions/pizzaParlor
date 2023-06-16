// Buisness Logic:

const pizzaSize = {
  Small: 10,
  Medium: 12,
  Large: 13,
};

const toppingsPrices = {
  mushrooms: 0.5,
  onions: 0.5,
  peppers: 0.5,
  olives: 0.5,
  tomatoes: 0.5,
  pineapple: 1,
  artichoke: 1,
  pepperoni: 1.5
};

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calcPrice = function () {
  let calcToppings = 0;
  for (let i = 0; i < this.toppings.length; i++) {
    calcToppings += toppingsPrices[this.toppings[i]];
  }
  return pizzaSize[this.size] + calcToppings;
}

// UI Logic:
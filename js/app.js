// Buisness Logic for order ---
function Order() {
  this.pizzas = {};
  this.currentId = 0;
};

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

let order = new Order();

// Buisness Logic for pizza ---
const pizzaSize = {
  small: 10,
  medium: 12,
  large: 13,
};

const toppingsPrices = {
  mushrooms: 0.59,
  onions: 0.59,
  peppers: 0.59,
  olives: 0.59,
  tomatoes: 0.59,
  anchovies: 1.59,
  pineapple: 1.59,
  artichoke: 1.59,
  pepperoni: 2.99,
};

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.calcPrice = function () {
  let calcToppings = 0;
  for (let i = 0; i < this.toppings.length; i++) {
    calcToppings += toppingsPrices[this.toppings[i]];
  };
  return pizzaSize[this.size] + calcToppings;
};

function addToCart() {
  let cart = document.getElementById('cart');
  cart.addEventListener('click', function () {
    let error = document.getElementById('error');
    if (chosenSize === "select" || selectedToppings.length === 0) { // assuming the first option value is "select"
      error.textContent = 'Please select a pizza size and at least one topping';
      error.classList.remove('invisible');
      error.classList.add('visible');
    } else {
      let myPizza = new Pizza(selectedToppings, chosenSize);
      order.addPizza(myPizza);
      console.log(chosenSize + ' pizza with: ' + selectedToppings);
      console.log('price: ' + myPizza.calcPrice());
      console.log('order so far: ', order);

      // Hide the error message if user selects a pizza size and at least one topping.
      error.classList.remove('visible');
      error.classList.add('invisible');
    }
  });
};
addToCart();

// UI Logic: ---

let checkedBoxes = document.querySelectorAll('#selectToppings input[type=checkbox]');
let selectedToppings = [];

let chosenSize;
document.getElementById("sizeSelection").addEventListener("change", function (e) {
  chosenSize = e.target.value;
  // console.log(chosenSize);
});

checkedBoxes.forEach(function (checkbox) {
  checkbox.addEventListener('click', function (e) {
    if (e.target.checked) {
      // console.log(e.target.id);
      selectedToppings.push(e.target.id)
      // console.log(selectedToppings);
    } else {
      // console.log('error: ' + e.target.id + ' been removed');
      let error = document.getElementById('error');
      error.innerText = e.target.id + ' been removed';
      error.classList.remove('invisible');
      error.classList.add('visible');

      setTimeout(function () {
        error.classList.remove('visible');
        error.classList.add('invisible');
      }, 700);

      let index = selectedToppings.indexOf(e.target.id);
      selectedToppings.splice(index, 1);
      // console.log('new array: ' + selectedToppings);
    };
    // console.log('final array: ' + selectedToppings);
  });
});

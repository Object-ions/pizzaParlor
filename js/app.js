// Buisness Logic:

const pizzaSize = {
  small: 10,
  medium: 12,
  large: 13,
};

const toppingsPrices = {
  mushrooms: 0.5,
  onions: 0.5,
  peppers: 0.5,
  olives: 0.5,
  tomatoes: 0.5,
  anchovies: 1,
  pineapple: 1,
  artichoke: 1,
  pepperoni: 1.5
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

// UI Logic:

let checkedBoxes = document.querySelectorAll('#selectToppings input[type=checkbox]');
let selectedToppings = [];

let chosenSize;
document.getElementById("sizeSelection").addEventListener("change", function (e) {
  chosenSize = e.target.value;
  console.log(chosenSize);
});

checkedBoxes.forEach(function (checkbox) {
  checkbox.addEventListener('click', function (event) {
    if (event.target.checked) {
      // console.log(event.target.id);
      selectedToppings.push(event.target.id)
      // console.log(selectedToppings);
    } else {
      console.log('error: ' + event.target.id + ' been removed');
      let index = selectedToppings.indexOf(event.target.id);
      selectedToppings.splice(index, 1);
      // console.log('new array: ' + selectedToppings);
    };
    console.log('final array: ' + selectedToppings);
  });
});

function cart() {
  let cart = document.getElementById('cart');
  cart.addEventListener('click', function () {

  });
};
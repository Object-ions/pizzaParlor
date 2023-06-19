// Buisness logic for Order ------------

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

// Buisness logic for Pizza ------------

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

// Buisness logic for the main function ------------

//set a new empty array
let selectedToppings = [];

//make a defualt selection- 'small'
let chosenSize = 'small';

function addToCart() {

  //listen to click on 'add to cart'
  let cart = document.getElementById('cart');
  cart.addEventListener('click', function () {

    //if the user didnt select 'pizza size' and 'toppings' show 'error'
    let error = document.getElementById('error');
    if (chosenSize === "select" || selectedToppings.length === 0) {
      error.textContent = 'Please select a pizza size and at least one topping';
      error.classList.remove('invisible');
      error.classList.add('visible');

    } else {

      //initiate new instance based on toppings and size
      let myPizza = new Pizza(selectedToppings, chosenSize);
      order.addPizza(myPizza);

      //display the order status on the DOM
      displayCart(order);

      error.classList.remove('visible');
      error.classList.add('invisible');
    }
    //clear the selected toppings borders
    removeSelectionStyle();

    //reveal the button 'check out'
    let checkout = document.getElementById('check-out');
    checkout.removeAttribute('class', 'invisible');
    checkout.setAttribute('class', 'visible');
  });
};

//call to execute
addToCart();

// UI Logic: ---------------------------

//get the chosen checkboxes
let checkedBoxes = document.querySelectorAll('#selectToppings input[type=checkbox]');

//listen to the drop down menu and get the value of selection
document.getElementById("sizeSelection").addEventListener("change", function (e) {
  chosenSize = e.target.value;
});

// listen to a 'click' on checkboxes and run actions according to logic
checkedBoxes.forEach(function (checkbox) {
  checkbox.addEventListener('click', function (e) {
    const label = document.querySelector(`label[for="${e.target.id}"]`);
    if (e.target.checked) {
      // get the chosen topping and add it to the array
      selectedToppings.push(e.target.id)

      //show a border around the chosen topping
      label.parentElement.classList.add('selected');
    } else {
      // show an error message on the DOM when item got diselected using the classes 'visible' / 'invisible'
      let error = document.getElementById('error');
      error.innerText = e.target.id + ' been removed';
      error.classList.remove('invisible');
      error.classList.add('visible');

      //add animation to add / remove classes 'visible' / 'invisible'
      setTimeout(function () {
        error.classList.remove('visible');
        error.classList.add('invisible');
      }, 700);

      //remove the elemnt that got deselected from the array at the index poition
      let index = selectedToppings.indexOf(e.target.id);
      selectedToppings.splice(index, 1);
      label.parentElement.classList.remove('selected');
    };
    // console.log('final array: ' + selectedToppings);
  });
});

//removing the borders around the selected toppings after clicking 'add to cart'
function removeSelectionStyle() {
  //get a node list of all items that has the class 'selected' lon them
  let labels = document.getElementsByClassName('selected');

  //conver to an array, select each element in the array and remove 'selected' class
  Array.from(labels).forEach(function (element) {
    element.classList.remove('selected');
  });

  //reset array to be empty after each selection
  selectedToppings = [];

  // uncheck all checkboxes
  checkedBoxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
};

//reveal the order in the DOM
function displayCart(pizzaToDisplay) {
  //find the elemnt to display and epty its content
  let displayOrder = document.getElementById("display-order");
  displayOrder.innerText = null;

  //create a 'ul' to store all pizzas
  let ul = document.createElement("ul");
  let totalCost = 0;

  //for each pizza create a 'li' tag and add its price to 'totalCost' using calcPrice()
  Object.values(pizzaToDisplay.pizzas).forEach(function (pizza) {
    let li = document.createElement("li");
    let pizzaCost = pizza.calcPrice();
    totalCost += pizzaCost;

    li.textContent = pizza.size + ' pizza with: ' + pizza.toppings.join(", ") + '. Price: $' + pizzaCost.toFixed(2);
    ul.appendChild(li);
  });

  let totalCostElement = document.createElement("p");
  totalCostElement.textContent = 'Total cost: $' + totalCost.toFixed(2);

  displayOrder.appendChild(ul);
  displayOrder.appendChild(totalCostElement);
};

cart.addEventListener('click', function () {
  displayCart(order);
});

let checkoutBtn = document.getElementById('check-out');
let checkoutForm = document.getElementById('checkout-form');
let closeBtn = document.getElementById('close-btn');

checkoutBtn.addEventListener('click', function () {
  checkoutForm.classList.toggle('visible');
  checkoutForm.classList.toggle('invisible');
});

closeBtn.addEventListener('click', function () {
  checkoutForm.classList.remove('visible');
  checkoutForm.classList.add('invisible');
});
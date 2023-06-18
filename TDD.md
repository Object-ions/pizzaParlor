Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: -> const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
-> myPizza;
Expected Output: <- Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: calcPrice()

Test: It should return the result of the concatenation of the size of the pizza and the toppings that been chosen.
Code: -> calcPrice(basicPizzaSmall, [onions, peppers])
Expected Output: <- 11

Test: It should calculate the price right when declaring the variable
Code: -> const myPizza = new Pizza(['pepperoni', 'onions', 'tomatoes'], 'small');
-> myPizza.calcPrice()
Expected Output: <- 12.5

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        selectedToppings.push(event.target.id);
      } else {
        const index = selectedToppings.indexOf(event.target.id);
        if (index > -1) {
          selectedToppings.splice(index, 1);
        }
      }
      console.log(selectedToppings); // You can use this array to calculate the price
    });
  });
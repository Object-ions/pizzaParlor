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

Describe: addToCart();

Test: It should return a node list with the selected checkbox(es)
Code: -> selectedToppings.push(e.target.id)
Expected Output: -> ['mushrooms', 'onions', 'peppers']
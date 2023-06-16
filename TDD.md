Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: myPizza;
.> Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: calcPrice()

Test: It should return the result of the concatenation of the size of the pizza and the toppings that been chosen.
Code: calcPrice(basicPizzaSmall, [onions, peppers])
Expected Output: > 11
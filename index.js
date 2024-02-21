const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, topping) => {
    console.log('order', 'Event Called', 'Order received! Baking a pizza.', `Size = ${size}`, `Topping = ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'paneer');
pizzaShop.displayOrderNumber();







// const EventEmitter = require('events');

// const EVENT_ORDER_PIZZA = 'order-pizza';

// const emitter = new EventEmitter();

// emitter.on(EVENT_ORDER_PIZZA, (size, topping) => {
//     console.log(EVENT_ORDER_PIZZA, 'Second Event Called', 'Order received! Generating bill');
// });
// emitter.on(EVENT_ORDER_PIZZA, (size, topping) => {
//     console.log(EVENT_ORDER_PIZZA, 'Event Called', 'Order received! Baking a pizza.', `Size = ${size}`, `Topping = ${topping}`);
// });

// emitter.emit(EVENT_ORDER_PIZZA, "large", "paneer");
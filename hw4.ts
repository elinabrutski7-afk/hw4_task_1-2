//Task 1
import {Calculator} from "./Calculator";

const numbers1 = new Calculator(1, 2);
const numbers2 = new Calculator(8, 7);

console.log('Сумма: ' + numbers1.addition(numbers1.num1, numbers1.num2) + ', является первое число больше второго? ' + numbers1.isGreater(numbers1.num1, numbers1.num2));
console.log('Сумма: ' + numbers2.addition(numbers2.num1, numbers2.num2) + ', является первое число больше второго? ' + numbers2.isGreater(numbers2.num1, numbers2.num2));

//Task 2
import {Product} from "./Product";

const product1 = new Product('Hands Cream', 5.99, 45);
const product2 = new Product('Monopoly', 23.99, 0);

console.log('Есть в наличии? ' + product1.isInStock());
console.log('Есть в наличии? ' + product2.isInStock());
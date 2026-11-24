const numbers = [10, 25, 30, 45, 50, 65, 80];

const doubledNumbers = numbers.map((number) => number * 2);
const numbersAbove40 = numbers.filter((number) => number > 40);
const firstNumberAbove50 = numbers.find((number) => number > 50);
const sum = numbers.reduce((total, number) => total + number, 0);

console.log("Числа, увеличенные в 2 раза:", doubledNumbers);
console.log("Числа больше 40:", numbersAbove40);
console.log("Первое число больше 50:", firstNumberAbove50);
console.log("Сумма всех чисел:", sum);

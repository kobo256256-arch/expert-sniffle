const products = [
  "Ноутбук",
  "Мышка",
  "Клавиатура",
  "Монитор",
  "Наушники",
  "Принтер",
];

const firstThree = products.slice(0, 3);
console.log("Первые три товара:", firstThree);

const monitorIndex = products.indexOf("Монитор");
products.splice(monitorIndex, 1);
products.splice(2, 0, "Веб-камера");

console.log("Обновленный массив:", products);
const products = ["Молоко", "Сыр", "Яйца", "Мясо", "Рис"];

products.unshift("Хлеб");
products.pop();
products[2] = "Курица";

console.log("Есть ли в массиве Хлеб:", products.includes("Хлеб"));
console.log("Обновленный массив:", products);

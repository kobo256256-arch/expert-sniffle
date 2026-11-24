const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  price: 3500000,
};

console.log("Марка автомобиля:", car.brand);
console.log("Модель автомобиля:", car.model);

car.price = 3200000;
car.color = "Черный";

car.getInfo = function () {
  console.log(
    `Информация об автомобиле: ${this.brand} ${this.model}, ${this.year} года, цвет ${this.color}, цена ${this.price} рублей`,
  );
};

car.getInfo();

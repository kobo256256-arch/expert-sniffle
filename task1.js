const students = ["Алексей", "Мария", "Иван", "Анна", "Дмитрий"];

console.log("Весь массив:", students);
console.log("Первый студент:", students[0]);
console.log("Последний студент:", students[students.length - 1]);

students.push("Екатерина");
students.shift();

console.log("Количество студентов:", students.length);

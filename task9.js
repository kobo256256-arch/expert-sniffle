
const studentWithGrades = {
  name: "Алексей",
  group: "ВР-1-26",
  grades: [5, 4, 5, 3, 4],
};

console.log("Имя студента:", studentWithGrades.name);
console.log("Группа студента:", studentWithGrades.group);

studentWithGrades.grades.push(5);

studentWithGrades.getAverage = function () {
  return (
    this.grades.reduce((total, grade) => total + grade, 0) /
    this.grades.length
  );
};

studentWithGrades.getStatus = function () {
  return this.getAverage() >= 3 ? "Успевает" : "Не успевает";
};

console.log("Информация о студенте:", studentWithGrades);
console.log("Средняя оценка:", studentWithGrades.getAverage());
console.log("Статус:", studentWithGrades.getStatus());

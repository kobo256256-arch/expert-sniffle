const grades = [5, 4, 3, 5, 4, 2, 5];

console.log("Количество оценок:", grades.length);
console.log("Первая оценка:", grades[0]);
console.log("Последняя оценка:", grades[grades.length - 1]);

grades.push(5);
grades.pop();

for (const grade of grades) {
  console.log(grade);
}

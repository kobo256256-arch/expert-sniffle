const student = {
  name: "Алексей",
  age: 19,
  group: "ВР-1-26",
  profession: "Веб-разработчик",
};

console.log("Имя студента:", student.name);
console.log("Группа студента:", student.group);

student.age = 20;
student.email = "alexey@example.com";
delete student.profession;

console.log("Обновленный объект:", student);

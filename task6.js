const scores = [95, 45, 78, 60, 32, 88, 100, 55];

const passingScores = scores.filter((score) => score >= 60);
const adjustedScores = scores.map((score) => Math.min(score + 5, 100));
const firstBelow50 = scores.find((score) => score < 50);
const average =
  scores.reduce((total, score) => total + score, 0) / scores.length;

console.log("Результаты от 60 баллов и выше:", passingScores);
console.log("Результаты с добавленными 5 баллами:", adjustedScores);
console.log("Первый результат ниже 50:", firstBelow50);
console.log("Средний балл:", average);

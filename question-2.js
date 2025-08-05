const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let scoreStudents = students.filter(students => students.score > 50);
console.log(scoreStudents);

let addpointsScore = scoreStudents.map(students => students.score * 1.1);
console.log(addpointsScore);

let totalScore = addpointsScore.reduce((sum , score)=> sum + score, 0);
console.log(totalScore);
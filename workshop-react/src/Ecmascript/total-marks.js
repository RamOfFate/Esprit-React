let students = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "John", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

const totalMarks = students
  .map((student) => (student.marks < 50 ? student.marks + 15 : student.marks))
  .filter((mark) => mark > 50)
  .reduce((total, mark) => total + mark, 0);

console.log(totalMarks);

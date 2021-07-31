

const students = [
  { name: "Adhi", gender: "male" },
  { name: "Ahamed", gender: "male" },
  { name: "Rutika Kadam", gender: "female" },
  { name: "Priyadharsini", gender: "female" },
];



// Task 1: find all female name
//["Rutika kadam", "Priyadharsini"];

console.log(students.filter(student=>student.gender==="female").map(f=>f.name));

//Task 2: Starting with 'A'
//["Adhi", "Ahamed"];

console.log(students.filter(student=>student.name.startsWith('A')).map(n=>n.name));

// Task 3: Count the no. of males
// 2

console.log(students.filter(student=>student.gender==="male").length);
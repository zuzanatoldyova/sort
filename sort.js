var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function comparator(student1, student2){
  if (student1.name === student2.name){
    return student2.age - student1.age;
  } else {
    return student1.name.localeCompare(student2.name);
  }
}

var sorted = students.sort(comparator);
console.log(sorted);
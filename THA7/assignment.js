// const person={
//     firsname:"Amogh",
// isStudyimg:true
// }

// person.lastname="Nagar"
// console.log(person.isStudyimg);

var student = { name: 'David Rayy', sclass: 'VI', rollno: 12 };
var array = Object.keys(student);

array.forEach((item) => console.log(item));

var student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};
console.log(student);
delete student['rollno'];
console.log(student);

var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];
library.forEach((item) => {
  console.log(item.author, item.title, item.readingStatus);
});

const cylinder = {
  radius: 23.2,
  height: 34.5,
  volume: function () {
    var x = 3.14 * this.radius * this.radius * this.height;
    console.log(x.toFixed(4)) ;
  },
};

cylinder.volume()


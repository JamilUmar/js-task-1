const myName = 'Jamil Umar';
const myCourses = ['Nodejs',  'C#',  'Html',  'Css',  'Javascript'];

// display my name and courses in the console
console.log(`My name is ${myName}`);
console.log(`I offer the listed ${myCourses.length} courses : ${myCourses}`);

// function to determine odd numbers
function isOdd(num) {
 if (num % 2 === 1) {
  return `${num} is Odd Number`;
 }
}

// determine if courses offered are odd
// if so display odd numbers from 1 - 200
if (isOdd(myCourses.length)) {
 console.log('Displaying odd numbers from 1 - 200');
 for (let i = 1; i <= 200; i++){
  console.log(isOdd(i));
 }
}


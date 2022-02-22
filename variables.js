const color = 'red';

console.log(color);

// color = 'yellow'; // cannot modify constant value

let person = 'juan';

console.log(person);

console.log(animal); // undefined
var animal = 'dog';
console.log(animal); // actual value

{
  let number = 1;
  console.log(number);
  var num = 2
}

// console.log(number); // cannot find let number
console.log(num); // finds num because of hoisting


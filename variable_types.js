console.log('-------------------------');

let number = 1
let copyNumber = number;

number = 2

console.log(number);
console.log(copyNumber);

let object = {
  name: 'name',
  nestedObject: {
    nestedName: 'name'
  }
};
let copyObject = object;

object.name = 'nam3';

console.log('object', JSON.parse(JSON.stringify(object)));
console.log('copyObject', JSON.parse(JSON.stringify(copyObject)));

// shallow copy
copyObject = { ...object };

object.name = 'name';
object.nestedObject.nestedName = 'nested';

console.log('object', JSON.parse(JSON.stringify(object)));
console.log('copyObject', JSON.parse(JSON.stringify(copyObject)));

// deep copy
copyObject = JSON.parse(JSON.stringify(object));

object.name = 'value';
object.nestedObject.nestedName = 'value';

console.log('object', JSON.parse(JSON.stringify(object)));
console.log('copyObject', JSON.parse(JSON.stringify(copyObject)));



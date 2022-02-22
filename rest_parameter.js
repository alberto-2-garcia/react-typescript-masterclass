console.log('--------------------------')

// rest parameter
function sum(...thisArgs) {
  // arguments object cannot use array functions
  return thisArgs.reduce(function (previous, current) {
      return previous + current;
  })
}

console.log(sum(5, 5, 5));


// spread operator - object
const userDetails = {
  name: 'Rysh',
  address: 'Anywhere',
  sample: {
    test: 'test'
  }
}

const newUserDetails = { ...userDetails, mobileNumber: 123 };

newUserDetails.sample.test = 'newTest';

console.log('userDetails:', userDetails);
console.log('newUserDetails:', newUserDetails);

// spread operator - array
const fruits = ['apple', 'avocado'];

const newFruits = [...fruits, 'guava'];

console.log('fruits:', fruits);
console.log('newFruits:', newFruits);

// destructuring - object
const userDetails2 = {
  name: 'Rysh',
  address: 'Anywhere',
  sample: {
    test: 'test'
  }
}

const { name: newName = 'May', ...otherDetails } = userDetails2;

console.log(newName);
console.log(otherDetails);

// destructuring - array
const fruits2 = ['avocado', 'guava', 'coconut'];

const [firstFruit = 'strawberry', ...otherFruits] = fruits2;

console.log(firstFruit);
console.log(otherFruits);

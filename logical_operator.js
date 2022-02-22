console.log('-------------------------')

const orSample = 5 || 0;
const orSample2 = 0 || 6;
const orSample3 = 0 || undefined;

console.log('orSample', orSample);
console.log('orSample2', orSample2);
console.log('orSample3', orSample3);

const andSample = 5 && 6;
const andSample2 = 5 && null;
const andSample3 = 0 && 6;
const andSample4 = 5 && 0 && 6;

console.log('andSample', andSample);
console.log('andSample2', andSample2);
console.log('andSample3', andSample3);
console.log('andSample4', andSample4);

console.log('-------------------');

// function calculateSquareArea() {  
//     setTimeout(() => {
//         const squareArea = 5 * 5;
//         console.log(squareArea);
//     }, 500)
// }

// calculateSquareArea();


// use Promise
function calculateSquareArea() {
  return new Promise(function (resolve, reject) {
      setTimeout(() => {
          const squareArea = 5 * 5;
          resolve(squareArea);
          // reject(squareArea);
      }, 500)
  })
}

function onFulFilled(data) {
  console.log('onFulFilled:', data);
}

function onRejected(reason) {
  console.log('onRejected:', reason);
}

calculateSquareArea()
  .then(onFulFilled, onRejected);

calculateSquareArea()
  .then(onFulFilled)
  .catch((reason) => {
      // catch also catches the error in onFulFilled
      console.log('catch:', reason);
  });


// promise resolve and reject
Promise.resolve('testresolve').then(onFulFilled)
  .catch((reason) => {
      // catch also catches the error in onFulFilled
      console.log('catch:', reason);
  });;

Promise.reject('testresolve').then(onFulFilled)
  .catch((reason) => {
      // catch also catches the error in onFulFilled
      console.log('catch:', reason);
  });;


// array of promises
const myPromises = [
  new Promise((resolve, reject) => setTimeout(resolve, 500)),
  new Promise((resolve, reject) => setTimeout(resolve, 500)),
  new Promise((resolve, reject) => setTimeout(resolve, 500)),
]

// use all, allSettled, race, any
Promise.all(myPromises)
  .then(onFulFilled)
  .catch((reason) => {
      // catch also catches the error in onFulFilled
      console.log('catch:', reason);
  });;



let myNumber = 5;

function changeNumber () {
    return new Promise((resolve) => {
        setTimeout(() => {
            myNumber = 10;
            resolve(myNumber);
        }, 500);
    })
}

function startChange() {
    changeNumber();
    console.log(myNumber);
}

// use Async Await
// async function startChange() {
//     await changeNumber();
//     console.log(myNumber);
// }

startChange();
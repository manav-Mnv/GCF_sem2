
/*

// 1. WHAT IS AN ARRAY?
// Stores multiple values in one variable
/*
// Defining an array with different data types
let fruits = ["apple", "banana", 2, true, false];

console.log("1:", fruits); 
console.log(fruits[2]); // Outputs: 2

// Modifying an element
fruits[1] = "orange";
console.log(fruits[1]); // Outputs: orange


// -----------------------------------------


// 2. ACCESS ELEMENT
// Index starts from 0

 let arr = [1,2,3,4,5]

    let NewArr=arr
    NewArr[0]= 5;
    console.log(NewArr)
    console.log(arr);



function calculateSum(input) {
  let nray = [];
  let sum = 0;

  // Fill the array
  for (let i = 1; i <= input; i++) {
    nray.push(i);
  }

  // Calculate sum from the array
  for (let j = 0; j < nray.length; j++) {
    sum += nray[j];
  }

  return sum; // Return the total instead of printing
}

let usput = prompt("Enter a number:");
let result = calculateSum(usput);

alert("Total: " + result);

*/


/*
function getSum(limit) {
    let arr = [];
    
    // Fill the array (1 to limit)
    for (let i = 0; i < limit; i++) {
        arr[i] = i + 1;
    }

    let sum = 0;
    // Calculate the total sum
    for (let i = 0; i < limit; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

// How to use it:
let input = parseInt(prompt("Enter a number:"));
let result = getSum(input);
console.log(result);


*/


/*

// Create a stack using a normal array
let stack = [];

// PUSH: Add elements to the top
stack.push("First");
stack.push("Second");
console.log("Stack after push:", stack);

// POP: Remove the top element
let removedElement = stack.pop();
console.log("Popped element:", removedElement);

// Final stack state
console.log("Final Stack:", stack);

*/

/*
// Defining the fruits array
let fruits = ["apple", "banana", "cherry"];

// Now the loop has something to iterate over
for (let fruit of fruits) {
  console.log("8:", fruit);
}

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(n => n * 2);

console.log("9:", doubled);
*/

/*

let f = ["apple", "banana", "cherry"];
let x = prompt("Favorite?");

for (let fruit of f) {
  if (fruit === x) {
    console.log("8:", fruit, "true");
  } else {
    console.log("8:", fruit, "false");
  }
}

let n = [1, 2, 3, 4];
let d = n.map(m => m * 2);
console.log("9:", d);

*/




const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit);
});





const numbers = [1, 2, 3, 4];

// Multiply each number by 10
const multiplied = numbers.map(num => num * 10);

console.log(multiplied); // [10, 20, 30, 40].







let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes = arr2.filter(num => {
  if (num <= 1) return false; // 1 and below are not prime

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If divisible, it's not prime
  }

  return true; // Otherwise, it is prime
});

console.log("10.1:", primes); 
// Output: [2, 3, 5, 7]



*/
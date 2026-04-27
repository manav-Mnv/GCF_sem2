
/*

let celsius = prompt("Enter Celsius value: ");
        celsius = parseFloat(celsius);
        let change = (celsius*9/5)+32;
        change = parseFloat(change);

        console.log(change);
let result = prompt("Please enter your name:", "Guest");
        console.log(result);


*/        

/*



// --- BASIC (Loops + Conditions) ---

// 1. Write a program to print numbers from 1 to 10 using a for loop.
console.log("1: Numbers 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print all even numbers between 1 and 20.
console.log("2: Even numbers 1 to 20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Write a program to check if a number is positive, negative, or zero.
let numInput = prompt("3. Enter a number to check (Positive/Negative/Zero):");
let num = Number(numInput);
if (num > 0) {
    console.log("3: Positive");
} else if (num < 0) {
    console.log("3: Negative");
} else {
    console.log("3: Zero");
}

// 4. Print the multiplication table of a given number (e.g., 5).
let tableInput = prompt("4. Enter a number for its multiplication table:");
let tableNum = Number(tableInput);
console.log(`4: Multiplication Table for ${tableNum}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}


// --- INTERMEDIATE (Arrays + Loops) ---

// 5. Given an array [10, 20, 30, 40], print all elements using a loop.
// Making this interactive: User enters the array elements.
let arrayInput = prompt("5. Enter numbers separated by commas (e.g., 10, 20, 30, 40):");
let arr = arrayInput.split(",").map(item => item.trim());

console.log("5: Printing all elements:");
arr.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});






// --- INTERMEDIATE (Arrays + Loops) ---

// 6. Find the sum of all numbers in an array.
let sumInput = prompt("6. Enter numbers separated by commas to find their sum:");
let sumArr = sumInput.split(",").map(Number);
let totalSum = sumArr.reduce((acc, curr) => acc + curr, 0);
console.log("6: Sum is", totalSum);

// 7. Find the largest number in an array.
let maxInput = prompt("7. Enter numbers separated by commas to find the largest:");
let maxArr = maxInput.split(",").map(Number);
let largest = Math.max(...maxArr);
console.log("7: Largest number is", largest);

// 8. Count how many even numbers are in an array.
let evenCountInput = prompt("8. Enter numbers separated by commas to count evens:");
let evenArr = evenCountInput.split(",").map(Number);
let evenCount = evenArr.filter(n => n % 2 === 0).length;
console.log("8: Number of even numbers:", evenCount);


// --- INTERMEDIATE (Objects + Conditions) ---

// 9. Create an object 'student' with name, marks. Print "Pass" if marks >= 40.
let sName = prompt("9. Enter student name:");
let sMarks = Number(prompt("9. Enter student marks:"));
let student = { name: sName, marks: sMarks };
console.log(`9: ${student.name} status:`, student.marks >= 40 ? "Pass" : "Fail");

// 10. Check if person is eligible to vote (age >= 18).
let vName = prompt("10. Enter person's name:");
let vAge = Number(prompt("10. Enter person's age:"));
let person = { name: vName, age: vAge };
if (person.age >= 18) {
    console.log(`10: ${person.name} is eligible to vote.`);
} else {
    console.log(`10: ${person.name} is NOT eligible to vote.`);
}






// 7. Find the largest number in an array
let input7 = prompt("7. Enter numbers separated by commas (e.g. 10,50,30):");
let arr7 = input7.split(",").map(Number);
console.log("7: Largest is", Math.max(...arr7));

// 8. Count how many even numbers are in an array
let input8 = prompt("8. Enter numbers separated by commas to count evens:");
let arr8 = input8.split(",").map(Number);
let evens = arr8.filter(n => n % 2 === 0).length;
console.log("8: Even count is", evens);

// 9. Student "Pass" or "Fail" object
let name9 = prompt("9. Enter student name:");
let marks9 = Number(prompt("9. Enter marks:"));
let student = { name: name9, marks: marks9 };
console.log("9:", student.marks >= 40 ? "Pass" : "Fail");

// 10. Voting eligibility
let name10 = prompt("10. Enter person name:");
let age10 = Number(prompt("10. Enter age:"));
let person = { name: name10, age: age10 };
console.log("10:", person.age >= 18 ? "Eligible" : "Not eligible");

// 11. Loop through an object and print all keys and values
let myObj = { name: "John", age: 25, city: "New York" };
console.log("11: Object details:");
for (let key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}

// 12. Create a new array with only odd numbers
let input12 = prompt("12. Enter numbers to filter odds (comma separated):");
let arr12 = input12.split(",").map(Number);
let odds = arr12.filter(n => n % 2 !== 0);
console.log("12: Odd numbers are", odds);

// 13. Reverse an array using a loop
let input13 = prompt("13. Enter items to reverse (comma separated):");
let arr13 = input13.split(",").map(i => i.trim());
let reversed = [];
for (let i = arr13.length - 1; i >= 0; i--) {
    reversed.push(arr13[i]);
}
console.log("13: Reversed array:", reversed);

// 14. Array of objects: Print names of students who passed (marks >= 40)
let students = [
    { name: "A", marks: 80 },
    { name: "B", marks: 35 },
    { name: "C", marks: 60 }
];
console.log("14: Students who passed:");
students.forEach(s => {
    if (s.marks >= 40) console.log(s.name);
});

// 15. Count how many times a specific element appears
let input15 = prompt("15. Enter a list of items (comma separated):");
let arr15 = input15.split(",").map(i => i.trim());
let target = prompt("Which item should I count?");
let count = arr15.filter(item => item === target).length;
console.log(`15: '${target}' appears ${count} times.`);






function findMaxLength(nums) {
    const map = new Map();
    // Initialize with sum 0 at index -1
    map.set(0, -1);
    
    let maxLength = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // Treat 0 as -1, 1 as 1
        count += (nums[i] === 1 ? 1 : -1);

        if (map.has(count)) {
            // If sum has been seen before, calculate length
            maxLength = Math.max(maxLength, i - map.get(count));
        } else {
            // Store the first time we see this sum
            map.set(count, i);
        }
    }

    return maxLength;
}

// Example usage:
const input = [0, 1, 0, 1, 1, 0, 0];
console.log(findMaxLength(input)); // Output: 6







*/


/*
function countVowel(str) {
  let count = 0;
  let vowel = "aeiouAEIOU";
  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowel("aeidfushdfiuwhfeuihou"));



*/

/*

// 15. REVERSE
// Reverse order
// ---------------------------------
arr.reverse();
console.log("15:", arr);

// ---------------------------------
// 16. SLICE
// Copy part (no change)
// ---------------------------------

let sliceArr = [1, 2, 3, 4, 7];
let sliced = sliceArr.slice(2, 4);
console.log("16:", sliced);


*/


/*

function reVStr(str){
    let reverse=str.split("").reverse().join("")
    return reverse;
}
console.log(reVStr("vanaM"))




const fruits = ["apple", "orange", "banana", "pear", "blueberry", "kiwi", "papaya"];
const newFruits = fruits.slice(2, 4);

console.log(newFruits);



let spliceArr = [1, 2, 3, 4, 7];
spliceArr.splice(0, 3);
console.log("17:", spliceArr);
*/


/*
let fruits = ["Apple", "Banana", "Cherry"];
let joined = fruits.join(", ");
console.log("18:", joined);

*/

/*





let spliceArr = [1, 2, 3, 4, 7];
spliceArr.splice(0, 3);
console.log("17:", spliceArr);

let fruits = ["Apple", "Banana", "Cherry"];
let joined = fruits.join(", ");
console.log("18:", joined);

let a = [1, 2];
let b = [3, 4];
let combined = [...a, ...b];
console.log("19:", combined);


*/

/*

let matrix = [[1, 2], [3, 4], [9, 5]];
console.log("20:", matrix[2][0]);
*/
 
/*

function listInter(list1, list2) {
  let listIntersection = [];
  for (let name of list1) {
    if (list2.includes(name)) {
      listIntersection.push(name);
    }
  }
  return listIntersection;
}

let list1 = ["Alice", "Bob", "Charlie"];
let list2 = ["Bob", "David", "Alice"];

console.log(listInter(list1, list2));



function removeDubArray(arr){
    return [...new Set(arr)]
}

console.log(removeDubArray([2,3,4,5,2,4,2,45,5,3,2,2,5,6,7,8]))


*/


function findIntersection(arr1, arr2) {
  let intersection = [];
  for (let number of arr1) {
    if (arr2.includes(number) && !intersection.includes(number)) {
      intersection.push(number);
    }
  }
  return intersection;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 1];
console.log(findIntersection(arr1, arr2));


0






































/*

const input = prompt("Enter a number :");
const n = parseInt(input);

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

console.log(`Prime numbers between 0 and ${n}:`);
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}


*/
document.write("mANAV sINH")
console.log("MNV");

/*


let rows = 4;
let pattern = "";

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);


// --- PATTERN 1: STARS ---


console.log("Pattern 1: Stars");
let rows1 = 4;
for (let i = 1; i <= rows1; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}

console.log("\n-------------------\n");

// --- PATTERN 2: ALPHABET ---

console.log("Pattern 2: Alphabet");
let rows2 = 4;
for (let i = 1; i <= rows2; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += String.fromCharCode(65 + j);
    }
    console.log(line);
}

console.log("\n-------------------\n");

// --- PATTERN 3: REPEATING NUMBERS ---
// 1
console.log("Pattern 3: Repeating Numbers");
let rows3 = 5;
for (let i = 1; i <= rows3; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}

console.log("\n-------------------\n");

// --- PATTERN 4: HOLLOW TRIANGLE ---

let rowSs = 6;

for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      
        if (j === 1 || j === i || i === rowSs) {
            line += "*";
        } else {
            line += " ";
        }
    }
    console.log(line);
}

// --- 1. INVERTED STARS ---

console.log("1. Inverted Stars");
for (let i = 4; i >= 1; i--) {
    console.log("*".repeat(i));
}

console.log("\n---\n");

// --- 2. INVERTED 'X' ---

console.log("2. Inverted X");
for (let i = 4; i >= 1; i--) {
    console.log("x".repeat(i));
}

console.log("\n---\n");

// --- 3. HOLLOW SQUARE ---

console.log("3. Hollow Square");
let size = 4;
for (let i = 1; i <= size; i++) {
    let line = "";
    for (let j = 1; j <= size; j++) {
        if (i === 1 || i === size || j === 1 || j === size) {
            line += "x";
        } else {
            line += " ";
        }
    }
    console.log(line);
}

console.log("\n---\n");

// --- 4. CUSTOM SHAPE (Diamond-ish Tip) ---

console.log("4. Custom Shape");
let customRows = [1, 3, 2, 1]; 
for (let i = 0; i < customRows.length; i++) {
    console.log("*".repeat(customRows[i]));
}

document.write("HELLOO YEH LOO");




function drawPattern() {
    for (let i = 5; i >= 1; i--) {
        console.log("*".repeat(i));
    }

    for (let i = 3; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}

drawPattern();


// 1. The @ Pattern
console.log("--- Pattern 1: @ Triangle ---");
for (let i = 3; i >= 1; i--) {
    console.log("@".repeat(i));
}



console.log("\n--- Pattern 2: The 0 Box ---");
// 2. The Box Pattern (4x4)
const sizEe = 4;
for (let i = 0; i < sizEe; i++) {
    if (i === 0 || i === sizEe - 1) {
        console.log("*".repeat(sizEe));
    } else {
        console.log("0  0");
    }
}

console.log("\n--- Pattern 3: Hollow Star Triangle ---");
// 3. Hollow Star Triangle (Boundary only)
const height = 5;
for (let i = 1; i <= height; i++) {
    if (i === 1) {
        console.log(" ".repeat(height - i) + "*");
    } else if (i === height) {
        let base = "";
        for (let j = 0; j < height; j++) {
            base += "* ";
        }
        console.log(base.trim());
    } else {
        let outerSpace = " ".repeat(height - i);
        let innerSpace = " ".repeat((i - 1) * 2 - 1);
        console.log(outerSpace + "*" + innerSpace + "*");
    }
}


*/

console.log(".......................................................................................................................");

/*

const subtracte = (a, b) => {
    return a - b;
  };
  
  console.log("Subtraction", subtracte(10, 5));
  

console.log("Claculator")

const add = function(a, b) { return a + b; };
const subtract = function(a, b) { return a - b; };
const multiply = function(a, b) { return a * b; };
const divide = function(a, b) { 
    return b === 0 ? "Error: Division by zero" : a / b; 
};

const calculate = function(num1, num2, operator) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return "Invalid Operator";
    }
};

const n1 = parseFloat(prompt("Enter the first number:"));
const op = prompt("Enter an operator (+, -, *, /):");
const n2 = parseFloat(prompt("Enter the second number:"));

const result = calculate(n1, n2, op);

console.log(`Result: ${result}`);
alert(`Result: ${result}`);


*/

/*

console.log("..................................................................................................................................................................");




// 9. CALLBACK FUNCTION

function processUser(name, callback) {
    console.log("Processing " + name);
    callback();
}

function done() {
    console.log("Done!");
}

processUser("Rahul", done);
 2.02       



 // 📝 5. Change Case

const text2 = "JavaScript";

console.log("6.", text2.toUpperCase());
console.log("7.", text2.toLowerCase());





const teext = "hello world";
const reesult = teext.toUpperCase(); 

console.log(reesult); // "HELLO WORLD"



const texxt = "HELLO WORLD";
const resuult = texxt.toLowerCase();

console.log(resuult); // "hello world"





const ttext = "Hello World";

// 1. Basic slice (from index 0 to 5)
console.log(ttext.slice(0, 5)); // "Hello"

// 2. Slice to the end (omit the second parameter)
console.log(ttext.slice(6));    // "World"

// 3. Negative indices (count from the end)
console.log(ttext.slice(-5));   // "World"












const textt = "Apple, Banana, Cherry";

// 1. Split by comma and space
const frruits = textt.split(", ");
console.log(frruits); // ["Apple", "Banana", "Cherry"]

// 2. Split by every character (use an empty string)
const letterrs = "Hi".split("");
console.log(letterrs); // ["H", "i"]

// 3. Limit the results
const partyial = textt.split(", ", 2);
console.log(partyial); // ["Apple", "Banana"]






const tnext = "Apple, Banana, Cherry";

// 1. Split by comma and space
const frunits = tnext.split(", ");
console.log(frunits); // ["Apple", "Banana", "Cherry"]

// 2. Split by every character (use an empty string)
const letteeers = "Hi".split("");
console.log(letteeers); // ["H", "i"]

// 3. Limit the results
const partial = tnext.split(", ", 2);
console.log(partial); // ["Apple", "Banana"]




const teeext = "Hello World";

// 1. Basic slice (from index 0 to 5)
console.log(teeext.slice(0, 5)); // "Hello"

// 2. Slice to the end (omit the second parameter)
console.log(teeext.slice(6));    // "World"

// 3. Negative indices (count from the end)
console.log(teeext.slice(-5));   // "World"

*/


// 1. The Original String
const message = "Learning JavaScript is Fun!";
console.log("Original:", message);

// 2. Length Property (Counts all characters)
const size = message.length;
console.log("Length:", size); // 27

// 3. Lowercase & Uppercase
const lower = message.toLowerCase();
const upper = message.toUpperCase();
console.log("Lowercase:", lower); // "learning javascript is fun!"
console.log("Uppercase:", upper); // "LEARNING JAVASCRIPT IS FUN!"

// 4. Slicing (Extracting a part)
// Extracts from index 9 to 19 (the word "JavaScript")
const piece = message.slice(9, 19);
console.log("Sliced Part:", piece); // "JavaScript"

// 5. Splitting (Breaking into an Array)
// Splits the string at every space
const words = message.split(" ");
console.log("Word Array:", words); // ["Learning", "JavaScript", "is", "Fun!"]

// 6. Practical Example: Capitalizing the first letter
const str = "hello";
const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
console.log("Capitalized Example:", capitalized); // "Hello"


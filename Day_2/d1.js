document.write("mANAV sINH")
console.log("MNV");




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

/*document.write("mANAV sINH")

    let age=30;
    const name = "Manav"
    console.log("age =", age)
    console.log("name =", name)
    console.log("Name " + " " + name + " is " + age + " years old.")
*/
//if else 
/*
    let a = prompt("Enter a number");
    let b = prompt("Enter another number");

    if (isNaN(a) || isNaN(b) || a === "" || b === "") {
        alert("Error: One of your inputs is not a number!");
    } else {
        if (Number(a) > Number(b)) {
            alert("a is greater than b");
        } else if (Number(a) < Number(b)) {
            alert("b is greater than a");
        } else {
            alert("Both numbers are equal");
        }
    }
*/
// if else nested one 
/*
    let a = Number(prompt("Enter first number (a)"));
    let b = Number(prompt("Enter second number (b)"));
    let c = Number(prompt("Enter third number (c)"));

    if (!a || !b || !c) {
        alert("\ enter numbers only!");
    } else {
        if (a > b && a > c) {
            alert("a is greatest");
        } else if (b > a && b > c) {
            alert("b is greatest");
        } else if (c > a && c > b) {
            alert("c is  greatest");
        } else {
            alert("The numbers are equal");
        }
    }
*/
//switchcase
/*
    let isRaining = prompt("Is it raining? (yes/no)");

    if (isRaining === "yes") {
        let isCold = prompt("Is it cold outside? (yes/no)");

        if (isCold === "yes") {
            alert("Wear a heavy raincoat and a warm sweater!");
        } else {
            alert("Wear a light raincoat or take an umbrella.");
        }
    }
    else {
        let isSunny = prompt("Is it sunny? (yes/no)");

        if (isSunny === "yes") {
            alert("Wear sunglasses and a t-shirt.");
        } else {
            alert("Just a regular outfit is fine today.");
        }
    }
*/

/*
    let day = Number(prompt("Enter a day number (1-7)"));

    switch (day) {
        case 1:
            console.log("Monday");
            alert("Monday");
            break;
        case 2:
            console.log("Tuesday");
            alert("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
            alert("Invalid day");
    }
*/
/* 
    let limit = Number(prompt("How many numbers do you want to print?"));

    if (isNaN(limit) || limit <= 0) {
        alert("Please enter a valid positive number!");
    } else {
        for (let i = 1; i <= limit; i++) {
            console.log(i);
            alert("Current number: " + i);
        }
    }
*/

/*
    for (let i = 1; i <= 100; i++) {
        // Check if the number is divisible by 2
        if (i % 2 === 0) {
            console.log(i);
        }
    }

*/


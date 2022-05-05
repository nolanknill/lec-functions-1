// // alert("Hello World");

// let returnValueOfNumber = Number("7");

// let returnValueOfConsoleLog = console.log(returnValueOfNumber);

// console.log(returnValueOfConsoleLog);

// let returnValueOfMathRandom = Math.random();
// console.log(returnValueOfMathRandom);

function output(string1) {
    alert(string1);
}


// output("Great Answer");
// output("Jimmy is two");
// output("Spike is older than that");



// Let's create a function that gives us a random number
// What's the range of the random numbers
// What type of number? Do we want to include decimals?


// What does the function do? Generate a random number
// Input? Range of numbers: (max)
// Output / Return value? Number

/**
 * Generates a random number between a 
 * specified range
 * 
 * @param Number min
 * @param Number max 
 * @return Number Randomly generated number
 */
function generateRandomNumber(min, max) {
    let range = max - min;

    return Math.round(Math.random() * range) + min;
}

console.log("Generated random number: ", generateRandomNumber(99, 100));






/*
    Parameters:
        - temperature
        - colour
        - clean or not
        - occasion:
            "social" | "business"
        - time of day
            - pyjamas after a certain time?
// Return string
    - "t-shirt", "tank top", "rain coat", "winter jacket" 
*/

console.log(wardrobePicker(25, ["tank top"]));
console.log(wardrobePicker(-1));
console.log(wardrobePicker(10));
console.log(wardrobePicker(21, ["t-shirt"]));
console.log(wardrobePicker(25));
console.log(wardrobePicker("Hot"));

function wardrobePicker(temperature, cleanClothes = []) {
    let wardrobe;

    if (temperature < 0) {
        wardrobe = "Winter Jacket";
    } else if (temperature >= 0 && temperature <= 20) {
        wardrobe = "Rain Coat";
    } else if (temperature > 20) {
        // If our t-shirt is clean, pick t-shirt
        // Otherwise if our tank top is clean, pick tank top
        if (cleanClothes.includes("t-shirt")) {
            wardrobe = "t-shirt";
        } else if (cleanClothes.includes("tank top")) {
            wardrobe = "tank top";
        } else {
            wardrobe = "You should do laundry";
        }
    } else {
        wardrobe = "Not sure how to handle these conditions";
    }

    return wardrobe;
}






console.group("Function as Expressions");
console.log(sum(67, 67));

// Create a function to get the sum of two numbers
function sum(number1, number2) {
    return number1 + number2;
}

let sumAsExpression = function(number1, number2) {
    return number1 + number2;
}
console.log(sumAsExpression(67, 67));
console.groupEnd("Function as Expressions");
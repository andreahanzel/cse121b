/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    if (number2 === 0) {
        console.log("Cannot divide by zero");
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

/* Decision Structure */
function checkNumber(number) {
    if (number > 0) {
        console.log("Number is positive");
    } else if (number < 0) {
        console.log("Number is negative");
    } else {
        console.log("Number is zero");
    }
}

/* HTML Form Interaction for Arithmetic Operations */
// Addition
function addNumbers() {
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Subtraction
function subtractNumbers() {
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(number1, number2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Multiplication
const multiplyNumbers = () => {
    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(number1, number2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Division
function divideNumbers() {
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(number1, number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Selection Structures */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
    let total = isMember ? subtotal * 0.8 : subtotal;
    document.querySelector('#total').textContent = `Total: $${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
// Source Array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray;

// Odd Numbers
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 !== 0);

// Even Numbers
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

// Sum of Source Array
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

// Source Array Times Two
const multiplied = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multiplied;

// Sum of Source Array Times Two
document.querySelector('#sumOfMultiplied').textContent = multiplied.reduce((sum, number) => sum + number, 0);

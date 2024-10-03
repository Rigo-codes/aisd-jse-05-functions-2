// 1. Greeting Function (Standard Function Declaration)
function greet(name) {
  return `Hello, ${name}! Welcome!`;
}

// Test the Greeting function (Standard Function)
console.log(greet("Alice")); // Output: Hello, Alice! Welcome!

// 2. Greeting Function (Arrow Function)
const greetArrow = (name) => `Hello, ${name}! Welcome!`;

// Test the Greeting function (Arrow Function)
console.log(greetArrow("Bob")); // Output: Hello, Bob! Welcome!

// 3. Even or Odd Checker (Standard Function Declaration)
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}

// Test the Even or Odd function
console.log(isEvenOrOdd(10)); // Output: 10 is even
console.log(isEvenOrOdd(7)); // Output: 7 is odd

// 4. Square Function (Arrow Function)
const square = (num) => num * num;

// Test the Square function
console.log(square(5)); // Output: 25

// 5. Add Function (Arrow Function)
const add = (a, b) => a + b;

// Test the Add function
console.log(add(4, 6)); // Output: 10

// 6. Subtract Function (Arrow Function)
const subtract = (a, b) => a - b;

// Test the Subtract function
console.log(subtract(10, 3)); // Output: 7

// 7. Multiply Function (Arrow Function)
const multiply = (a, b) => a * b;

// Test the Multiply function
console.log(multiply(7, 5)); // Output: 35

// 8. Divide Function (Arrow Function)
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
};

// Test the Divide function
console.log(divide(20, 4)); // Output: 5
console.log(divide(10, 0)); // Output: Cannot divide by zero!


/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0;
  }

  add(number) {
      this.result += number;
  }

  subtract(number) {
      this.result -= number;
  }

  multiply(number) {
      this.result *= number;
  }

  divide(number) {
      if (number === 0) {
          throw new Error("Division by zero");
      }
      this.result /= number;
  }

  clear() {
      this.result = 0;
  }

  getResult() {
      return this.result;
  }

  calculate(expression) {
      // Remove continuous spaces and split the expression
      const tokens = expression.trim().split(/\s+/);

      // Initialize variables for parsing
      let currentNumber = '';
      let currentOperator = null;
      let stack = [];

      for (const token of tokens) {
          if (!isNaN(token)) {
              // Token is a number
              currentNumber += token;
          } else if (['+', '-', '*', '/'].includes(token)) {
              // Token is an operator
              if (currentNumber === '') {
                  throw new Error('Invalid expression');
              }
              const number = parseFloat(currentNumber);
              currentNumber = '';
              if (currentOperator) {
                  this.performOperation(stack, currentOperator, number);
              } else {
                  stack.push(number);
              }
              currentOperator = token;
          } else {
              // Invalid character
              throw new Error('Invalid expression');
          }
      }

      // Perform the last operation
      if (currentNumber !== '') {
          const number = parseFloat(currentNumber);
          this.performOperation(stack, currentOperator, number);
      }

      // Set the final result
      this.result = stack.pop();

      return this.result;
  }

  performOperation(stack, operator, number) {
      switch (operator) {
          case '+':
              stack.push(number);
              break;
          case '-':
              stack.push(-number);
              break;
          case '*':
              stack.push(stack.pop() * number);
              break;
          case '/':
              stack.push(stack.pop() / number);
              break;
      }
  }
}

// Example usage:
const calc = new Calculator();
calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7"); // Output: 22
console.log(calc.getResult()); // Output: 22





module.exports = Calculator;

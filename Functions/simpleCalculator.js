function simpleCalculator(num1, num2, operator) {

    let operation;

    if (operator === "multiply") {
        operation = (x, y) => x * y;
    } else if (operator === "divide") {
        operation = (x, y) => x / y;
    } else if (operator === "add") {
        operation = (x, y) => x + y;
    } else if (operator === "subtract") {
        operation = (x, y) => x - y;
    }

    console.log(operation(num1, num2));
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');
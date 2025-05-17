function sumOfOddNumbers(totalNumbers) {

    let printNumbers = 0;
    let currentNumber = 1;

    let sum = 0;

    while (printNumbers < totalNumbers) {
        console.log(currentNumber);

        sum += currentNumber;

        currentNumber += 2;
        printNumbers++;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);
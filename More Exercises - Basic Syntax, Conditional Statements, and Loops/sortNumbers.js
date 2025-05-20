function sortNumbers(num1, num2, num3) {

    let numbers = [num1, num2, num3];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let x = i + 1; x < numbers.length; x++) {
            if (numbers[i] < numbers[x]) {
                let num = numbers[i];
                numbers[i] = numbers[x];
                numbers[x] = num;
            }
        }
    }

    console.log(numbers.join('\n'));
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1,3);
sortNumbers(0, 0, 2);
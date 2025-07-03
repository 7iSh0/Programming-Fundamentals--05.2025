function sumDigits(n) {

    let num = n;
    let result = 0;

    do {
        let lastDigit = num % 10;
        result += lastDigit;
        num = parseInt(num / 10);
    } while (num > 0);

    // Alternative using a while loop
    // while (num > 0) {
    //     let lastDigit = num % 10;
    //     result += lastDigit;
    //     num = parseInt(num / 10);
    // }

    console.log(result);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

// let myNumber = 12345678;
// console.log(myNumber % 10); // Output: 8
// myNumber = parseInt(myNumber / 10); // Remove the last digit
// console.log(myNumber % 10); // Output: 7
// myNumber = parseInt(myNumber / 10); // Remove the last digit
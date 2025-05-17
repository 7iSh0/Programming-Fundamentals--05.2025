function division(number) {

    let result = "Not divisible";

    if (number % 10 === 0) {
        result = 10;
    } else if (number % 7 === 0) {
        result = 7;
    } else if (number % 6 === 0) {
        result = 6;
    } else if (number % 3 === 0) {
        result = 3;
    } else if (number % 2 === 0) {
        result = 2;
    }

    if (result != "Not divisible") {
        console.log(`The number is divisible by ${result}`);
    } else {
        console.log(result);
    }
}

division(30);
division(15);
division(12);
division(1643);
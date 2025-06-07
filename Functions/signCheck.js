function signCheck(numOne, numTwo, numThree) {

    let totalNegativeNumbers = 0;

    if (numOne < 0) {
        totalNegativeNumbers++;
    }
    if (numTwo < 0) {
        totalNegativeNumbers++;
    }
    if (numThree < 0) {
        totalNegativeNumbers++;
    }

    if (totalNegativeNumbers === 1 || totalNegativeNumbers === 3) {
        console.log("Negative");
    } else if (totalNegativeNumbers === 0 || totalNegativeNumbers === 2) {
        console.log("Positive");
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
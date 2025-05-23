function amazingNumbers(num) {

    let numAsString = num.toString();

    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let currentSymbol = numAsString[i];

        sum += Number(currentSymbol);
    }

    let sumAsString = sum.toString();

    isAmazing = sumAsString.includes('9');

    // let isAmazing = false;

    // for (let i = 0; i < sumAsString.length; i++) {
    //     let currentDigit = sumAsString[i];

    //     if (currentDigit === '9') {
    //         isAmazing = true;
    //     }
    // }

    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(1233);
amazingNumbers(999);
function sumEvenNumbers(arr) {

    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = Number(arr[i]);
    // }

    // let sum = 0;

    // for (let num of arr) {
    //     if (num % 2 === 0) {
    //         sum += num;
    //     }
    // }

    // console.log(sum);

    let sum = 0;

    for (let number of arr) {
        number = Number(number);

        if (number % 2 === 0) {
            sum += number;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);
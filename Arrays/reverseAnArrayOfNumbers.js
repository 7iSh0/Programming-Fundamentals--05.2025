function reverseAnArrayOfNumbers(n, arr) {

    let newArr = [];

    for (let i = n - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    console.log(newArr.join(' '));

    // for (let i = 0; i < n; i++) {
    //     let oldArrValue = arr[i];

    //     newArr[i] = oldArrValue;
    // }

    // let reversedArr = newArr.reverse(); || // let reversedArr = [];

    // for (let i = 0; i < newArr.length; i++) {
    //     let currentValue = newArr[i];

    //     reversedArr[newArr.length - 1 - i] = currentValue;
    // }

    // console.log(reversedArr);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
function firstAndLastKNumbers(arr) {

    let k = arr.shift();
    // let k = arr[0];
    // arr = arr.slice(1);

    let firstKNumbers = arr.slice(0, k);
    let lastKNumbers = arr.slice(arr.length - k);

    console.log(firstKNumbers.join(" "));
    console.log(lastKNumbers.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
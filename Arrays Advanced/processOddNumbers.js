function processOddNumbers(arr) {

    let result = arr
        .filter((num, index) => index % 2 === 1)
        .map(num => num * 2)
        .reverse();

    console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
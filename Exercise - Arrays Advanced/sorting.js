function sorting(arr) {

    let sortedArr = arr.sort((a, b) => b - a);
    let middle = Number(sortedArr.length / 2);
    let result = [];

    for (let i = 0; i < middle; i++) {
        let biggest = sortedArr.shift();
        let smallest = sortedArr.pop();

        result.push(biggest);
        result.push(smallest);
    }

    console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32,7, 19, 47]); 
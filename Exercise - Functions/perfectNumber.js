function perfectNumber(n) {

    function findPositiveDivisiors(num) {
        result = [];
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                result.push(i);
            }
        }
        return result;
    }

    function sumArray(arr) {
        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }

    let resultArray = findPositiveDivisiors(n);
    let sumResult = sumArray(resultArray);

    if (sumResult === n) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
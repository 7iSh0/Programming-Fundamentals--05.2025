function maxNumber(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let isMax = true;
        let left = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let right = arr[j];

            if (right >= left) {
                isMax = false;
                break;
            }
        }

        if (isMax) {
            result.push(left);
        }
    }

    console.log(result.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
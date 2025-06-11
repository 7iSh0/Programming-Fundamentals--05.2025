function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = i - k;

        if (startIndex < 0) {
            startIndex = 0;
        }

        let previuosThreeNumbers = result.slice(startIndex, i);
        let sum = 0;

        for (let number of previuosThreeNumbers) {
            sum += number;
        }

        result[i] = sum;
    }

    console.log(result.join(" "));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
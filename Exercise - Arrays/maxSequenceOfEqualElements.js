function maxSequenceOfEqualElements(arr) {

    let maxLength = 1;
    let maxStartIndex = 0;

    let currentLength = 1;
    let currentStartIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++;
        } else {
            currentLength = 1;
            currentStartIndex = i;
        }

        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxStartIndex = currentStartIndex;
        }
    }

    let result = [];

    for (let i = maxStartIndex; i < maxStartIndex + maxLength; i++) {
        result.push(arr[maxStartIndex]);
    }

    console.log(result.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
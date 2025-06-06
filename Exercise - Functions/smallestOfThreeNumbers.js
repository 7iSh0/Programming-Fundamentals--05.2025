function smallestOfThreeNumbers(a, b, c) {

        function findSmallestNumber(x, y) {
        if (x <= y) {
            return x;
        } else {
            return y;
        }
    }

    let tempResult = findSmallestNumber(a, b);
    let result = findSmallestNumber(tempResult, c);
    console.log(result);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);
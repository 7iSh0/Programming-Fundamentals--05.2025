function addAndSubtract(a, b, c) {

    function sum (x, y) {
        return x + y;
    }

    function substract(x, y) {
        return x - y;
    }

    let sumResult = sum(a, b)
    let finalResult = substract(sumResult, c);
    console.log(finalResult);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
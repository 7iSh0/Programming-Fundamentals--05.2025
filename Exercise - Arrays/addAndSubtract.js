function addAndSubtract(arr) {

    let resultArr = [];
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        if (currentElement % 2 === 0) {
            resultArr.push(currentElement + i);
        } else {
            resultArr.push(currentElement - i);
        }

        originalSum += currentElement;
        modifiedSum += resultArr[i];
    }

    console.log(resultArr);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
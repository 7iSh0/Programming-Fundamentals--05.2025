function searchForANumber(arr1, arr2) {

    let workingArr = arr1.slice();
    let end = arr2[0];
    let sliceArr = workingArr.splice(0, end);

    end = arr2[1];
    sliceArr.splice(0, end);

    let n = arr2[2];

    resultArr = sliceArr.filter(x => x === n);

    console.log(`Number ${n} occurs ${resultArr.length} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
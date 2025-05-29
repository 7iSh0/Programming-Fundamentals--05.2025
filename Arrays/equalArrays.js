function equalArrays(arr1, arr2) {

    let arrAreEqual = true;
    let sum = 0;
    let difference = -1;

    for (let i = 0; i < arr1.length; i++) {
        let firstElement = arr1[i];
        let secondElement = arr2[i];

        if (firstElement === secondElement) {
            sum += Number(firstElement);
        } else {
            arrAreEqual = false;
            difference = i;
            break;
        }
    }

    if (arrAreEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${difference} index`);
    }

    // for (let i = 0; i < arr1.length; i++) {
    //     arr1[i] = Number(arr1[i]);
    // }

    // for (let i = 0; i < arr2.length; i++) {
    //     arr2[i] = Number(arr2[i]);
    // }

    // let areEqual = true;
    // let sum = 0;

    // for (let i = 0; i < arr1.length; i++) {
    //     sum += arr1[i];
    // }

    // for (let i = 0; i < arr1.length; i++) {
    //     if (arr1[i] !== arr2[i]) {
    //         areEqual = false;
    //         console.log(`Arrays are not identical. Found difference at ${i} index`);
    //         break;
    //     }
    // }

    // if (areEqual) {
    //     console.log(`Arrays are identical. Sum: ${sum}`);
    // }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);
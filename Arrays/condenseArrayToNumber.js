function condenseArrayToNumber(arr) {

    // if (arr.length === 1) {
    //     console.log(arr[0]);
    //     return;
    // }

    // let result = [];

    // while (true) {

    //     for (let i = 0; i < arr.length - 1; i++) {
    //         let firstElement = arr[i];
    //         let secondElement = arr[i + 1];

    //         let sum = firstElement + secondElement;

    //         result.push(sum);
    //     }

    //     if (result.length === 1) {
    //         break;
    //     }

    //     arr = result;
    //     result = [];
    // }

    // console.log(result[0]);

    if (arr.length === 1) {
        console.log(arr[0]);
        return;
    }

    while (arr.length > 1) {
        let result = [];

        for (let i = 0; i < arr.length - 1; i++) {
            result.push(arr[i] + arr[i + 1]);
        }
        
        arr = result;
    }

    console.log(arr[0]);
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);
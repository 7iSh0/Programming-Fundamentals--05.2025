function arrayRotation(arr, rotation) {

    let length = arr.length;
    let result = [];
    let r = rotation % length;

    for (let i = r; i < length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < r; i++) {
        result.push(arr[i]);
    }

    console.log(result.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
function sumFirstAndLast(arr) {

    arr = arr.map(Number);

    let first = arr.shift(); 
    let last = arr.pop();

    console.log(first + last);

    // let first = arr[0];
    // let last = arr[arr.length - 1];
    // console.log(Number(first) + Number(last));
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);
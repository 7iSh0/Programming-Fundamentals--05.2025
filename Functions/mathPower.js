function mathPower(x, y) {

    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    console.log(result);
    
    // let result = Math.pow(x, y);
    // console.log(result);
}

mathPower(2, 8);
mathPower(3, 4);
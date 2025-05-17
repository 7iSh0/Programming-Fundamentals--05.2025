function triangleOfNumbers(n) {

    let buff = "";
    for (let i = 0; i <= n; i++) {
        buff = "";
        for (let j = 0; j < i; j++) {
            buff += i + " ";
        }
        console.log(buff);
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);
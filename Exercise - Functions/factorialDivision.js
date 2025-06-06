function factorialDivision(n1, n2) {

    function factorial(n) {

        if (n < 0) {
            return undefined;
        }

        let result = 1;

        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    let num1 = factorial(n1);
    let num2 = factorial(n2);
    let result = num1 / num2;
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
function oddAndEvenSum(num) {

    function extractEven(n) {
        let result = [];

        do {
            let lastNum = n % 10;
            if (lastNum % 2 === 0) {
                result.push(lastNum);
            }
            n = parseInt(n / 10);
        } while (n > 0)
            return result;
    }

    function extractOdd(n) {
        let result = [];
        do {
            let lastNum = n % 10;
            if (lastNum % 2 > 0) {
                result.push(lastNum);
            }
            n = parseInt(n / 10);
        } while (n > 0)
            return result;
    }

    function sumArray(arr) {
        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }

    let odd = extractOdd(num);
    let even = extractEven(num);

    let oddSum = sumArray(odd);
    let evenSum = sumArray(even);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);

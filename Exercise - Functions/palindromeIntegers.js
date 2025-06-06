function palindromeIntegers(arr) {

    function checkPalindrom(num) {
        let str = num.toString();
        let reversed = str.split("").reverse().join("");
        return str === reversed ? true : false;
    }

    for (el of arr) {
        console.log(checkPalindrom(el));
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);
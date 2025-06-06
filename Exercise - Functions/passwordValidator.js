function passwordValidator(pass) {

    function checkLength(str, min, max) {
        return str.length >= min && str.length <= max
    }

    function checkRange(num, min, max) {
        return num >= min && num <= max;
    }

    function checkLettersDigitsOnly(str) {
        for (let i = 0; i <str.length; i++) {
            let asciiCode = str[i].charCodeAt(0);
            if (!checkRange(asciiCode, 48, 57) 
            && !checkRange(asciiCode, 65, 90)
            && !checkRange(asciiCode, 97, 122)) {
                return false;
            }
        }
        return true;
    }

    function countDigits(str) {
        let result = 0;

        for (let i = 0; i < str.length; i++) {
            let asciiCode = str[i].charCodeAt(0);

            if (checkRange(asciiCode, 48, 57)) {
                result++;
            }
        }
        return result;
    }

    let isValid = true;

    if (!checkLength(pass, 6, 10)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    } 

    if (!checkLettersDigitsOnly(pass)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (countDigits(pass) < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
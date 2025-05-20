function reverseString(str) {

    let reversedStr = str.split("").reverse().join("");
    console.log(reversedStr);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");
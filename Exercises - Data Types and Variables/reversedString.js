function reversedString(str) {

    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    console.log(result);
    // console.log(str.split('').reverse().join('')); 
}

reversedString('Information');
reversedString('star');
reversedString('racecar');
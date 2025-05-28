function lowerOrUpper(str) {

    if (str === str.toUpperCase()) {
        console.log("upper-case"); 
    } else {
        console.log("lower-case");
    }

    // let asciiCode = str.charCodeAt(0);
    // if (asciiCode >= 65 && asciiCode <= 90) {
    //     console.log("upper-case");
    // } else {
    //     console.log("lower-case");
    // }
}

lowerOrUpper("L");
lowerOrUpper("f");
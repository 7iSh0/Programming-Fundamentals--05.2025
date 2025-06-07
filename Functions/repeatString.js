function repeatString(value, count) {

    let result = "";

    for (let i = 0; i < count; i++) {
        result += value;
    }

    console.log(result);
}

repeatString("abc", 3);
repeatString("String", 2);
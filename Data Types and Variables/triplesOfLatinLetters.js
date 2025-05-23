function triplesOfLatinLetters(n) {

    let number = Number(n);

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < n; i++) {
        let result = "" + alphabet[i];
        
        for (let j = 0; j < n; j++) {
            let secondResult = result + alphabet[j];

            for (let k = 0; k < n; k++) {
                let thirdResult = secondResult + alphabet[k];

                console.log(thirdResult);
            }
        }
    }
}

triplesOfLatinLetters("2");
triplesOfLatinLetters("3");
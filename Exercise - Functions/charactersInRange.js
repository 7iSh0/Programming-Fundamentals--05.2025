function charactersInRange(char1, char2) {

    function findBiggerChar(c1, c2) {
        let char1 = c1.charCodeAt(0);
        let char2 = c2.charCodeAt(0);

        if (char1 < char2) {
            return [char1, char2]
        } else {
            return [char2, char1]
        }
    }

    // let sortedChars = findBiggerChar(char1, char2);
    // let start = sortedChars[0];
    // let stop = sortedChars[1];
    let [start, stop] = findBiggerChar(char1, char2);
    let result = [];

    for (let i = start + 1; i < stop; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(" "));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
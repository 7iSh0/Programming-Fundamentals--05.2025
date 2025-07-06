function oddOccurrences(sentence) {

    let words = sentence.split(" ");

    let countMap = new Map();

    for (let word of words) {
        let lower = word.toLowerCase();

        // countMap.set(lower, (countMap.get(lower) || 0) + 1);
        if (!countMap.has(lower)) {
            countMap.set(lower, 0);
        } 

        countMap.set(lower, countMap.get(lower) + 1);
    }

    let result = [];

    for (let [key, value] of countMap.entries()) {
        if (value % 2 === 1) {
            result.push(key);
        }
    }

    console.log(result.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
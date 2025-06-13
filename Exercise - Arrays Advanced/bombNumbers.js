function bombNumbers(seqance, bomb) {

    let [bombNum, power] = bomb;

    while (seqance.includes(bombNum)) {
        let bombIndex = seqance.indexOf(bombNum);

        let start = bombIndex - power;
        if (start < 0) {
            start = 0;
        }

        let end = bombIndex + power;
        if (end > seqance.length - 1) {
            end = seqance.length - 1;
        }

        seqance.splice(start, end - start + 1);
    }

    function sumArr(arr) {
        let sum = 0;

        for (let num of arr) {
            sum += num;
        }

        return sum;
    }

    console.log(sumArr(seqance));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
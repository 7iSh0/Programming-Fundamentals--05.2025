function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let reversedIndex = arr.length - 1 - i;

        let value = arr[i];
        let secondValue = arr[reversedIndex];

        arr[i] = secondValue;
        arr[reversedIndex] = value;
    }

    console.log(arr.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);
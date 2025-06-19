function arrayModifier(input) {

    let array = input[0].split(" ").map(Number);

    for (let i = 1; i < input.length; i++) {
        let commandLine = input[i];

        if (commandLine === "end") {
            break;
        }

        let parts = commandLine.split(" ");
        let command = parts[0];

        switch(command) {
            case "swap":
                let swapIndex1 = Number(parts[1]);
                let swapIndex2 = Number(parts[2]);
                [array[swapIndex1], array[swapIndex2]] = [array[swapIndex2], array[swapIndex1]];
                break;
            case "multiply":
                let multiplyIndex1 = Number(parts[1]);
                let multiplyIndex2 = Number(parts[2]);
                array[multiplyIndex1] *= array[multiplyIndex2];
                break;
            case "decrease":
                array = array.map(x => x - 1);
                break;
        }
    }

    console.log(array.join(", "));
}

arrayModifier([ '23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end' ]);
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);
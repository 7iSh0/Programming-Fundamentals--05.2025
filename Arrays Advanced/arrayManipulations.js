function arrayManipulations(arr) {

    let numbers = arr
        .shift()
        .split(" ")
        .map(Number);

    for (let command of arr) {
        let commandParts = command.split(" ");

        let commandName = commandParts.shift();

        commandParts = commandParts.map(Number);

        if (commandName === "Add") {
            let value = commandParts.pop();

            numbers.push(value);
        } else if (commandName === "Remove") {
            let value = commandParts.pop();

            numbers = numbers.filter(num => num !== value);
        } else if (commandName === "RemoveAt") {
            let index = commandParts.pop();

            numbers.splice(index, 1);
        } else if (commandName === "Insert") {
            let number = commandParts[0];
            let index = commandParts[1];

            numbers.splice(index, 0, number);
        }
    }

    console.log(numbers.join(" "));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);
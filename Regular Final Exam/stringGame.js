function stringGame(arr) {

    let text = arr.shift();
    let command = arr.shift();

    while (command !== "Done") {
        let commandParts = command.split(" ");
        let commandName = commandParts[0];

        switch (commandName) {
            case "Change":
                text = text.replaceAll(commandParts[1], commandParts[2]);
                console.log(text);
                break;
            case "Includes":
                if (text.includes(commandParts[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                if (text.endsWith(commandParts[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                text = text.toUpperCase();
                console.log(text);
                break;
            case "FindIndex":
                console.log(text.indexOf(commandParts[1]));
                break;
            case "Cut":
                let startIndex = Number(commandParts[1]);
                let endIndex = Number(commandParts[2]);
                let result = text.substring(startIndex, startIndex +endIndex);
                console.log(result);
                text = result;
                break;
        }

        command = arr.shift();
    }
}

stringGame((["//Th1s 1s my str1ng!//", 
"Change 1 i", 
"Includes string", 
"End my", 
"Uppercase", 
"FindIndex I", 
"Cut 5 5", 
"Done"]));
stringGame((["*S0ftUni is the B3St Plac3**", 
"Change 2 o", 
"Includes best",
"End is", 
"Uppercase", 
"FindIndex P", 
"Cut 3 7", 
"Done"]));
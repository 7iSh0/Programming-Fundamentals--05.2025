function movingTarget(input) {

    let targets = input[0].split(" ").map(Number);

    for (let i = 1; i < input.length; i++) {
        let line = input[i];

        if (line === "End") {
            break;
        }

        let parts = line.split(" ");
        let command = parts[0];
        let index = Number(parts[1]);
        let value = Number(parts[2]);

        switch (command) {
            case "Shoot":
                if (index >= 0 && index < targets.length) {
                    targets[index] -= value;

                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case "Add":
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let start = index - value;
                let end = index + value;

                if (start >= 0 && end < targets.length) {
                    targets.splice(start, end - start + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
    }

    console.log(targets.join("|"));
}

movingTarget((["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]));
movingTarget((["1 2 3 4 5", "Strike 0 1", "End"]));
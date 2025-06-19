function shootForTheWin(arr) {

    let targets = arr.shift().split(" ").map(x => Number(x));
    let targetsShot = 0;

    let command = arr.shift();
    while(command !== "End") {
        let index = Number(command);

        if (index >= 0 && index < targets.length) {
            let targetValue = targets[index];

            if(targetValue !== -1) {
                targetsShot++;
            }

            targets[index] = -1;

            targets = targets.map(x => {
                if(x === -1) {
                    return x;
                }

                if(x > targetValue) {
                    return x - targetValue;
                } else {
                    return x + targetValue;
                }
            })
        }

        command = arr.shift();
    }

    console.log(`Shot targets: ${targetsShot} -> ${targets.join(" ")}`);
}

shootForTheWin((["24 50 36 70", "0", "4", "3", "1", "End"]));
shootForTheWin((["30 30 12 60 54 66", "5", "2", "4", "0", "End"]));
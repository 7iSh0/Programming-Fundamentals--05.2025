function heartDelivery(arr) {

    let neighborhood = arr.shift().split("@").map(Number);
    let lastIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === "Love!") {
            console.log(`Cupid's last position was ${lastIndex}.`);

            let unhappyHouses = neighborhood.filter(x => x > 0);

            if (unhappyHouses.length > 0) {
                console.log(`Cupid has failed ${unhappyHouses.length} places.`);
            } else {
                console.log("Mission was successful.");
            }
            return;
        }

        let jumpParams = command.split(" ");
        let jumpValue = Number(jumpParams[1]);

        lastIndex += jumpValue;
        if (lastIndex >= neighborhood.length) {
            lastIndex = 0;
        }

        if (neighborhood[lastIndex] === 0) {
            console.log(`Place ${lastIndex} already had Valentine's day.`);
        } else {
            neighborhood[lastIndex] -= 2;

            if (neighborhood[lastIndex] === 0) {
                console.log(`Place ${lastIndex} has Valentine's day.`);
            }
        }
    }
}

heartDelivery((["10@10@10@2", "Jump 1", "Jump 2", "Love!"]));
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"])
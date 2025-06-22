function experienceGaining(arr) {

    let newArr = arr.map(Number);

    let neededExp = newArr[0];
    let battleCount = newArr[1];
    let battleArr = newArr.slice(2, newArr.length);

    let currentExp = 0;

    for (let i = 1; i <= battleCount; i++) {
        let battleExp = battleArr[i - 1];

        if (i % 3 === 0) {
            battleExp *= 1.15;
        }

        if (i % 5 === 0) {
            battleExp *= 0.9;
        }

        if (i % 15 === 0) {
            battleExp *= 1.05;
        }

        currentExp += battleExp;

        if (currentExp >= neededExp) {
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            return;
        }
    }

    let experienceNeeded = neededExp - currentExp;
    console.log(`Player was not able to collect the needed experience, ${experienceNeeded.toFixed(2)} more needed.`);
}

experienceGaining(([500, 5, 50, 100, 200, 100, 30]));
experienceGaining(([500, 5, 50, 100, 200, 100, 20]));
experienceGaining(([400, 5, 50, 100, 200, 100, 20]));
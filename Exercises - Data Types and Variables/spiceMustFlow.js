function spiceMustFlow(startingYield) {

    let days = 0;
    let totalSpice = 0;

    while (startingYield >= 100) {
        days++;
        totalSpice += startingYield;
        startingYield -= 10;
        totalSpice -= 26;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    } else {
        totalSpice = 0;
    }

    console.log(days);
    console.log(totalSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);
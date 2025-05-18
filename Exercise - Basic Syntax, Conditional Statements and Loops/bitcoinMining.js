function bitcoinMining(arr) {

    let totalMoney = 0;
    let firstBitcoinDay = 0;
    let bitcoinBoughtCount = 0;
    let currentDay = 1;

    for (let goldQty of arr) {

        if (currentDay % 3 === 0) {
            goldQty *= 0.70;
        }

        let moneyWon = goldQty * 67.51;
        totalMoney += moneyWon;

        while (totalMoney >= 11949.16) {
            bitcoinBoughtCount++;
            totalMoney -= 11949.16;

            if (bitcoinBoughtCount === 1) {
                firstBitcoinDay = currentDay;
            }
        }

        currentDay++;
    }

    console.log(`Bought bitcoinMinings: ${bitcoinBoughtCount}`);

    if (bitcoinBoughtCount > 0) {
        console.log(`Day of the first purchased bitcoinMining: ${firstBitcoinDay}`);
    }
    
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
function taxCalculator(arr) {

    let inputStr = arr.join(" ");
    let vehiclesArr = inputStr.split(">>");
    let totalTaxCollected = 0;

    for (let i = 0; i < vehiclesArr.length; i++) {
        let newArr = vehiclesArr[i].split(" ");
        let carType = newArr.shift();
        let yearsTaxPaid = Number(newArr.shift());
        let kilometers = Number(newArr.shift());
        let tax = 0;

        switch (carType) {
            case "family":
                tax = 50 - (5 * yearsTaxPaid) + (Math.floor(kilometers / 3000) * 12);
                console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                totalTaxCollected += tax;
                break;
            case "heavyDuty":
                tax = 80 - (8 * yearsTaxPaid) + (Math.floor(kilometers / 9000) * 14);
                console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                totalTaxCollected += tax;
                break;
            case "sports":
                tax = 100 - (9 * yearsTaxPaid) + (Math.floor(kilometers / 2000) * 18);
                console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                totalTaxCollected += tax;
                break;
            default:
                console.log("Invalid car type.");
                break;
        }
    }
    
    console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`);
}

taxCalculator((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']));
taxCalculator((['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']));
function train(arr) {

    let inputArray = arr.slice();

    let wagons = inputArray.shift().split(" ").map(x => Number(x));
    let maxCapacity = Number(inputArray.shift());

    function checkElementFit(arr, value, maxValue) {
        for (let el of arr) {
            if (el + value <= maxValue) {
                return arr.indexOf(el);
            }
        }
        return undefined;
    }

    for (let el of inputArray) {
        if (el.includes("Add")) {
            [_, passengers] = el.split(" ");
            wagons.push(Number(passengers));
        } else {
            let passengersToFit = Number(el);
            let freeWagoon = checkElementFit(wagons, passengersToFit, maxCapacity);

            if (freeWagoon !== undefined) {
                wagons[freeWagoon] += passengersToFit;
            }
        }
    }

    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
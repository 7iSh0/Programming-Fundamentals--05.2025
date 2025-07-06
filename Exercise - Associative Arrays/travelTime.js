function travelTime(data) {

    let destinations = {};

    for (let i = 0; i < data.length; i++) {
        let parts = data[i].split(" > ");
        let country = parts[0];
        let town = parts[1];
        let cost = Number(parts[2]);

        if (!destinations[country]) {
            destinations[country] = {};
        }

        if (!destinations[country][town] || destinations[country][town] > cost) {
            destinations[country][town] = cost;
        }
    }

    let countries = [];

    for (let key in destinations) {
        countries.push(key);
    }

    countries.sort();

    for (let j = 0; j < countries.length; j++) {
        let countryName = countries[j];
        let towns = [];

        for (let townName in destinations[countryName]) {
            towns.push([townName, destinations[countryName][townName]]);
        }

        towns.sort((a, b) => a[1] - b[1]);

        let townsStr = towns.map(([town, cost]) => `${town} -> ${cost}`).join(" ");

        console.log(`${countryName} -> ${townsStr}`);
    }
}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);
travelTime(['Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']);
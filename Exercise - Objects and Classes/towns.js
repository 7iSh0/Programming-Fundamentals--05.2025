function towns(arr) {

    let towns = [];

    for (let record of arr) {
        [cityName, latitude, longitude] = record.split(' | ');

        let city = {
            "town": cityName,
            "latitude": Number(latitude).toFixed(2),
            "longitude": Number(longitude).toFixed(2)
        };

        towns.push(city);
    }

    for (let town of towns) {
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);
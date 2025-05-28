function convertDistance(meters) {

    const metersToKm = 1000;
    const milesPerKm = 0.621371;

    let km = meters / metersToKm;
    let miles = km * milesPerKm;

    console.log(`${meters} meters is equal to ${km} kilometers.`);
    console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

convertDistance(1852);
convertDistance(798);
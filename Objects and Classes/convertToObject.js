function convertToObject(jsonData) {

    let data = JSON.parse(jsonData);

    for (let [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
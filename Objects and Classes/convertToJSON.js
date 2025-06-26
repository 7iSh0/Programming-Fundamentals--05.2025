function convertToJSON(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    };

    let personJSON = JSON.stringify(person);

    console.log(personJSON);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');
function addressBook(data) {

    let addressBook = {};

    for (let entry of data) {
        let parsedData = entry.split(':');

        [fullName, address] = parsedData;

        addressBook[fullName] = address;
    }

    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort((first, second) => {
        let firstKey = first[0];
        let secondKey = second[0];

        return firstKey.localeCompare(secondKey);
    });

    for (let [fullName, address] of addressBookEntries) {
        console.log(`${fullName} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
'John:MilwaukeeCrossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:MestaCrossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);
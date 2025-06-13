function houseParty(arr) {

    let guestsList = [];

    for (let guest of arr) {
        let name = guest.split(" ")[0];

        if (guest.includes("is going!")) {
            if (guestsList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestsList.push(name);
            }
        } else if (guest.includes("is not going!")) {
            if (guestsList.includes(name)) {
                let index = guestsList.indexOf(name);
                guestsList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guestsList.join("\n"));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);
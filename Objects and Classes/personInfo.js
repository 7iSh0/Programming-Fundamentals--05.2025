function personInfo(firstName, lastName, age) {

    return {
        firstName,
        lastName,
        age
    };
}

let person = personInfo("Peter", "Pan", "20");

console.log(person);

// let person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// };

// return person;

personInfo("Peter", "Pan", "20");
personInfo("George", "Smith", "18");
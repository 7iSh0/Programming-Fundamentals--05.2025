// Object -> let person = {
//     name: "Tisho",
//     age: 33,
//     height: 180
// };

// let person = {};
// person.name = "Tisho";
// person.age = 33;
// person.height = 180;

// person.age = 34; - promeni v obekta
// delete person.age; - iztriva v obekta
// person.password = "1234"; - dobavq se novo svoistvo v obekta
// person["name"] = "Tisho";

// let firstName = "Tisho";
// let lastName = "Todorov";
// let person = {
//     firstName,
//     lastName
// };
// console.log(person);

// sayHello() {
//     console.log("Hello!");
// }

// person.sayHello = Hello;

// person.tellAge = function () {
//     console.log(person.age);
// }

// let allKeys = Object.keys(person); - vsicki svoistva na obekti v masiv
// let allValues = Object.values(person); - vsichki stoinosti na obekti v masiv
// let allEntries = Object.entries(person); - masiv ot svoistvata

// for (let key of Object.keys(person)) {
//     let value = person[key];
//     console.log(`${key}: ${value}`);
// }

// for (let entry of Object.entries(person)) {
//     let key = entry[0];
//     let value = entry[1];
//     console.log(`${key}: ${value}`);
// } 

// for (let [key, value] of Object.entries(person)) {
//     console.log(`${key}: ${value}`);
// } interaciq po kluchove

// let myObj = {
//     name: "Tisho"
// }
// someFunc(myObj);
// function someFunc(myObj) {
//     myObj.name = "Pesho";
// }
// console.log(myObj.name);
// Reference Type - promenq se

// let firstNum = 1000;
// let secondNum = firstNum;
// secondNum = 2000;
// console.log(secondNum);
//  Value Type - klonira se i se promenq samo vuv funkciqta

// let firstArr = [1, 2, 3];
// let secondArr = firstArr;
// secondArr[0] = 4;
// console.log(secondArr);
// Reference Type - promenq se

// Reference Type - Array, Object, Function
// Value Type - Number, String...

// let a = 100; // a = 100
// let b = a; // b = 100

// let c = [];
// let d = c; // c = d = []

// JSON - JavaScript Object Notation - izprashtane i formatirane na danni
// let someData = [
//     {
//         firstName: "Ivan",
//         lastName: "Ivanov",
//         age: 33,
//         hireDate: "05.2000"
//     },
//     {
//         firstName: "Maria",
//         lastName: "Georgieva",
//         age: 27,
//         hireDate: "08.2000"

//     }
// ]; 
// // obekti vuv masivi za json fail

// let dataJson = JSON.stringify(someData);
// console.log(dataJson);
// console.log(dataJson.length);

// let parsedData = JSON.parse(dataJson);
// console.log(parsedData[0]);

// class Employee {
//     constructor(firstName, lastName, age, hireDate) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.hireDate = hireDate;
//     }

//     speak() {
//         console.log(`Hello from ${this.firstName} ${this.lastName}!`);
//     }
// }

// let myEmployee = new Employee("Ivan", "Ivanov", 33, "05.2000");
// let mySecondEmployee = new Employee("Maria", "Georgieva", 27, "08.2000");

// let myEmployeeArray = [myEmployee, mySecondEmployee];

// for (let employee of myEmployeeArray) {
//     console.log(employee.firstName);
//     employee.speak();
// }
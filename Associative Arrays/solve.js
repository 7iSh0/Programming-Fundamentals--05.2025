// let myArr = {};
// let fullName = "Ana Marieva";
// myArr["Tisho Todorov"] = "0885383240";
// myArr["Ivan Ivanov"] = "0876543210";
// myArr["Petar Petrov"] = "0876543210";
// myArr[fullName] = "0876543210";
// console.log(myArr["Tisho Todorov"]);
// console.log(myArr[fullName]);



// let grades = {
//     "Ivan": 6,
//     "Petar": 5.50,
//     "Tisho": 4
// };
// grades["Anna"] = 6.00;
// grades.Boris = 4.50;
// console.log(grades["Boris"]);
// console.log(grades.Ivan);



// for (let key in grades) {
//     console.log(`${key}: ${grades[key].toFixed(2)}`);
// }



// console.log(grades.hasOwnProperty("Ivan")); // proverqva dali ima daden kluch
// delete grades["Ivan"]; // iztriva daden kluch

// for (let key in grades) {
//     console.log(`${key}: ${grades[key].toFixed(2)}`);
// }
// for (let [key, value] of Object.entries(grades)) {
//     console.log(`${key}: ${value.toFixed(2)}`);
// }



// let gradesEntries = Object.entries(grades);
// console.log(gradesEntries);
// gradesEntries.sort((first, second) => {
//     let firstKey = first[0];
//     let secondKey = second[1];
//     return firstKey.localeCompare(secondKey);
// });
// console.log(gradesEntries);
// for (let [key, value] of gradesEntries) {
//     console.log(`${key}: ${value}`);
// }



// let arr = [1, 2, 3, 4];
// [first, second, ...rest] = arr;
// let obj = {
//     name: "Pesho",
//     age: 20
// };
// let {name, age} = obj;
// console.log(name, age);



// associative arrays
// let objMap = {};
// objMap["Tisho"] = "0885383240";
// let value = objMap["Tisho"];
// let keyExists = objMap.hasOwnProperty("Tisho");
// objMap[1234] = true;
// for (let key of Object.keys(objMap)) {
//     console.log(key + " -> " + typeof(key));
// }

// map
// let map = new Map();
// map.set("Tisho", "0885383240");
// map.set("Ivan", "0876543210");
// map.set("Petar", "0876543210");
// let mapValue = map.get("Tisho");
// let mapValueExists = map.has("Tisho");
// map.set(1234, true);
// for (let key of map.keys()) {
//     console.log(key + " type: " + typeof(key));
// }
// map.clear(); // iztriva vsichki elementi
// map.delete(1234); // iztriva daden kluch
// console.log(map.size); // 0
// for (let value of map.values()) {
//     console.log(value);
// }
// for (let [key, value] of map.entries()) {
//     console.log(`${key}: ${value}`);
// }

// let keys = Array.from(map.keys()); // prevryshta mapa v masiv
// let sorted = Array.from(map.entries())
//     .sort((first, second) => {
//         let firstKey = first[0];
//         let secondKey = second[0];
//         return secondKey.localeCompare(firstKey);
//     });
// for (let [key, value] of sorted) {
//     console.log(`${key}: ${value}`);
// }



// Set
// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(1);
// console.log(set.size); // povtarqshtite ne gi zapisva
// for (let number of set) {
//     console.log(number);
// }
// console.log(set.has(1)); // proverqva dali ima daden element
// set.delete(1); // iztriva daden element
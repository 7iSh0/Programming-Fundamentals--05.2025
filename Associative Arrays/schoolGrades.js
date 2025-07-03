function schoolGrades(input) {

    let map = new Map();

    for (let data of input) {
        let [name, ...grades] = data.split(" ");

        grades = grades.map(Number);

        if (map.has(name)) {
            let currentGrades = map.get(name);

            currentGrades = currentGrades.concat(grades);

            // for (let grade of grades) {
            //     currentGrades.push(grade);
            // }

            map.set(name, currentGrades);
        } else {
            map.set(name, grades);
        }
        // let parts = data.split(" ");

        // let name = parts[0];
        // let grades = [];

        // for (let i = 1; i < parts.length; i++) {
        //     let currentGrade = Number(parts[i]);

        //     grades.push(currentGrade);
        // }
    }

    let averageGrades = new Map();

    for (let [name, grades] of map) {
        let sum = 0;

        for (let grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        averageGrades.set(name, average.toFixed(2));
    }

    let sortedResult = Array.from(averageGrades)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, averageGrades] of sortedResult) {
        console.log(`${name}: ${averageGrades}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);
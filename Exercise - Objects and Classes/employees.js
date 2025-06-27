function employees(arr) {

    let result = [];

    for (let employee of arr) {
        let employeeObj = {
            "name": employee,
            "personalNum": employee.length
        };

        result.push(employeeObj);
    }

    result.forEach((employee) => {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    });
}

employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
employees(['Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland']);
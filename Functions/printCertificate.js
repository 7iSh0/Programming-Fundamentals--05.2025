function printCertificate(grade, names) {

    if (grade < 3.00) {
        console.log("Students failed the exam.");
        return;
    }

    printHeader();
    printNames(names);
    formatGrade(grade);

    function printHeader() {
        console.log("--------------------------");
        console.log("Certificate of Completion");
        console.log("--------------------------");
    }

    function printNames(names) {
        console.log(`${names[0]} ${names[1]}`);
    }

    function formatGrade(grade) {

        if (grade < 3.00) {
            console.log("Fail (2)");
        } else if (grade >= 3.00 && grade < 3.50) {
            console.log(`Poor (${grade.toFixed(2)})`);
        } else if (grade >= 3.50 && grade < 4.50) {
            console.log(`Good (${grade.toFixed(2)})`);
        } else if (grade >= 4.50 && grade < 5.50) {
            console.log(`Very good (${grade.toFixed(2)})`);
        } else {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }
    }
}

printCertificate(4.50, 'Ivan Ivanov');


// function sumTwoNumbers(a, b) {
//     return a + b;
// }

// arrow function

// let sumTwoNumbers = (a, b) => a + b;
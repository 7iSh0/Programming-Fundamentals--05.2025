function studentInformation(str, num1, num2) {

    let name = str;
    let age = num1;
    let grade = num2;
    let result = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
    console.log(result);

}

studentInformation('John', 15, 5.54678);
studentInformation('Steve', 16, 2.1426);
studentInformation('Marry', 12, 6.00);
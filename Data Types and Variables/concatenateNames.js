function concatenateNames(firstName, lastName, delimiter) {

    let result = `${firstName}${delimiter}${lastName}`;
    console.log(result);

}


concatenateNames('John', 'Smith', '->');
concatenateNames('Jan', 'White', '<->');
concatenateNames('Linda', 'Terry', '=>');
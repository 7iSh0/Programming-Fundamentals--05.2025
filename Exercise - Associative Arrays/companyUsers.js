function companyUsers(input) {

    let companyMap = new Map();

    for (let line of input) {
        let [company, employeeId] = line.split(" -> ");

        if (!companyMap.has(company)) {
            companyMap.set(company, new Set());
        }

        companyMap.get(company).add(employeeId);
    }

    // let sortedCompanies = Array.from(companyMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    let sortedCompanies = [...companyMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of sortedCompanies) {
        console.log(company);

        for (let id of employees) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']);
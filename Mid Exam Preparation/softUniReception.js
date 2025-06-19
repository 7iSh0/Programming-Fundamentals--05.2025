function softUniReception(arr) {

    let firstEmployee = Number(arr.shift());
    let secondEmployee = Number(arr.shift());
    let thirdEmployee = Number(arr.shift());
    let totalEmployees = firstEmployee + secondEmployee + thirdEmployee;
    let studentCount = Number(arr.shift());

    let totalWorkHours = studentCount / totalEmployees;
    let totalWorkHoursRounded = Math.ceil(totalWorkHours);

    let breaks = totalWorkHoursRounded / 3;
    let realBreaks = Math.trunc(totalWorkHours / 3);

    let breakModifier = 1;
    if (totalWorkHours === 0) {
        breakModifier = 0;
    }

    let totalBreaks = 0;
    if (breaks === realBreaks) {
        totalBreaks = realBreaks - breakModifier;
    } else {
        totalBreaks = realBreaks;
    }

    console.log(`Time needed: ${totalWorkHoursRounded + totalBreaks}h.`);
}

softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);
function bonusScoringSystem(arr) {

    let workingArr = arr.slice().map(x => Number(x));
    workingArr.shift();

    let lectures = workingArr.shift();
    let bonus = workingArr.shift();

    workingArr.sort((a, b) => b - a);

    let maxBonus = 0;
    let maxStudentAttendances = 0;
    if (workingArr.length > 0 && lectures > 0) {
        maxStudentAttendances = workingArr[0];
        maxBonus = (maxStudentAttendances / lectures) * (5 + bonus);
    }

    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${maxStudentAttendances} lectures.`);
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
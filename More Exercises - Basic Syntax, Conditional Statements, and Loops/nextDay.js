// function nextDay(year, month, day) {

//     let date = new Date(year, month - 1, day);
//     date.setDate(date.getDate() + 1);

//     let nextYear = date.getFullYear();
//     let nextMonth = date.getMonth() + 1;
//     let nextDay = date.getDate();

//     console.log(`${nextYear}-${String(nextMonth).padStart(2, '0')}-${String(nextDay).padStart(2, '0')}`);
// }

// nextDay(2016, 9, 30);
// nextDay(2020, 3, 24);

function nextDay(year, month, day) {
    // Масив с броя дни във всеки месец (индекс 0 = януари)
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Проверка за високосна година
    function isLeapYear(y) {
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }

    // Ако е февруари и високосна година
    if (month === 2 && isLeapYear(year)) {
        daysInMonth[1] = 29;
    }

    day++; // Увеличаваме деня с 1

    if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    }

    console.log(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
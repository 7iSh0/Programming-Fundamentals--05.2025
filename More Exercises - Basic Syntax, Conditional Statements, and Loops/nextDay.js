function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);

    let nextYear = date.getFullYear();
    let nextMonth = date.getMonth() + 1;
    let nextDay = date.getDate();

    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
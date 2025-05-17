function monthPrinter(num) {

    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = month[num - 1];

    if (num < 1 || num > 12) {
        console.log("Error!");
    } else {
        console.log(monthName);
    }
}

monthPrinter(2);
monthPrinter(13);
monthPrinter(0);
monthPrinter(5);
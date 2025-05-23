function requiredReading(numOfPages, pagesPerHour, daysToRead) {

    let totalHours = numOfPages / pagesPerHour;
    let hoursPerDay = totalHours / daysToRead;

    console.log(hoursPerDay);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
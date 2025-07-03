function meetings(data) {

    let meetings = {};

    for (let entry of data) {
        let parsedData = entry.split(' ');

        [weekday, fullName] = parsedData;

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = fullName;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let weekday in meetings) {
        console.log(`${weekday} -> ${meetings[weekday]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
meetings['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
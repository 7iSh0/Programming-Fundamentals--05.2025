function vacation(group, type, day) {

    let price = 0;

    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    price = group * 8.45;
                    break;
                case "Saturday":
                    price = group *  9.80;
                    break;
                case "Sunday":
                    price = group * 10.46;
                    break;
            }
            if (group >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
            if (group >= 100) {
                group -= 10;
            }
            switch (day) {
                case "Friday":
                    price = group * 10.90;
                    break;
                case "Saturday":
                    price = group * 15.60;
                    break;
                case "Sunday":
                    price = group * 16;
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price = group * 15;
                    break;
                case "Saturday":
                    price = group * 20;
                    break;
                case "Sunday":
                    price = group * 22.50;
                    break;
            }
            if (group >= 10 && group <= 20) {
                price *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
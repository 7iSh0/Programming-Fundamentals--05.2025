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

// There are also discounts based on some conditions:

// · Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%

// · Business – if the group is bigger than or equal to 100 people 10 of them can stay for free

// · Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%

// Note: You should reduce the prices in that EXACT order.
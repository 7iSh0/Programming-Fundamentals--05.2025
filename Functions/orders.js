function orders(product, quantity) {

    let price = 0;

    switch (product) {
        case "coffee": price = 1.50; break;
        case "water": price = 1.00; break;
        case "coke": price = 1.40; break;
        case "snacks": price = 2.00; break;
    }

    let totalPrice = quantity * price;

    console.log(totalPrice.toFixed(2));

    // let price = 0;

    // if (product === "coffee") {
    //     price = 1.50;
    // } else if (product === "water") {
    //     price = 1.00;
    // } else if (product === "coke") {
    //     price = 1.40;
    // } else if (product === "snacks") {
    //     price = 2.00;
    // }

    // let totalPrice = price * quantity;

    // return totalPrice.toFixed(2);
}

orders("water", 5);
orders("coffee", 2);
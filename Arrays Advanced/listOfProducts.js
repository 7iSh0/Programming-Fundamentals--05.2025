function listOfProducts(arr) {

    let result = arr
        .sort()
        .map((products, i) => `${i + 1}.${products}`);

    for (let arr of result) {
        console.log(arr);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
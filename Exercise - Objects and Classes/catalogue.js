function catalogue(arr) {

    let products = [];

    for (let line of arr) {
        let [name, price] = line.split(' : ');
        products.push({ name, price: Number(price) });
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';

    for (let product of products) {
        if (product.name[0] !== currentLetter) {
            currentLetter = product.name[0];

            console.log(currentLetter);
        }

        console.log(`  ${product.name}: ${product.price}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);
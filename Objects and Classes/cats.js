function cats(catDataArr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let catData of catDataArr) {
        let parsedData = catData.split(' ');

        let catName = parsedData[0];
        let catAge = Number(parsedData[1]);

        let cat = new Cat(catName, catAge);

        console.log(cat.meow());
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
function inventory(arr) {

    let heroes = [];

    for (let line of arr) {
        let [name, levelStr, itemsStr] = line.split(' / ');
        let level = Number(levelStr);
        let items = itemsStr ? itemsStr.split(', ').filter(i => i) : [];

        heroes.push({name, level, items}); 
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`); 
        console.log(`level => ${hero.level}`); 
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
inventory(['Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara']);
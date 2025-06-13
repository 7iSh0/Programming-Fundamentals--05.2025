function gladiatorInventory(arrayCommands) {

    let inventory = arrayCommands.shift().split(" ");

    for (let i = 0; i < arrayCommands.length; i++) {
        let commands = arrayCommands.slice()[i].split(" ")
        let command = commands[0];
        let equipment = commands[1];

        switch (command) {
            case 'Buy': buy(equipment);
                break;
            case 'Trash': thrash(equipment);
                break;
            case 'Repair': repair(equipment);
                break;
            case 'Upgrade': upgrade(equipment);
                break;
        }
    }
    console.log(inventory.join(' '));

    function buy(equipment) {
        if (!inventory.includes(equipment)) {
            inventory.push(equipment);
        }
        return inventory;
    }

    function thrash(equipment) {
        for (let i = 0; i < inventory.length; i++) {
            if (equipment === inventory[i]) {
                inventory.splice(i, 1);
            }
        }
        return inventory;
    }

    function repair(equipment) {
        for (let i = 0; i < inventory.length; i++) {
            if (equipment === inventory[i]) {
                let repaired = inventory.splice(i, 1);
                inventory.push(repaired.toString());
            }
        }
        return inventory;
    }

    function upgrade(equipment) {
        let item = equipment.split("-");
        for (let i = 0; i < inventory.length; i++) {
            if (item[0] === inventory[i]) {
                let newItem = item[0] + ":" + item[1];
                inventory.splice(i + 1, 0, newItem);
            }
        }
        return inventory;
    }
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);
function phoneShop(arr) {

    let phones = arr.shift().split(", ");

    let command = arr.shift();

    while (command !== "End") {
        
        let commandParts = command.split(" - ");
        let commandAction = commandParts[0];
        let commandParameter = commandParts[1];

        switch (commandAction) {
            case "Add":
                if (!phones.includes(commandParameter)) {
                    phones.push(commandParameter);
                }
                break;
            case "Remove":
                if (phones.includes(commandParameter)) {
                    let index = phones.indexOf(commandParameter);
                    phones.splice(index, 1);
                }
                break;
            case "Bonus phone":
                let [oldPhone, newPhone] = commandParameter.split(":");
                if (phones.includes(oldPhone)) {
                    let index = phones.indexOf(oldPhone);
                    phones.splice(index + 1, 0, newPhone);
                }
                break;
            case "Last":
                if (phones.includes(commandParameter)) {
                    let index = phones.indexOf(commandParameter);
                    phones.splice(index, 1);
                    phones.push(commandParameter);
                }
                break;
        }

        command = arr.shift();
    }

    console.log(phones.join(", "));
}

phoneShop((["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]));
phoneShop((["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]));
phoneShop((["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]));
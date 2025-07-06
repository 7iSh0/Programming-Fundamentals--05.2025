function legendaryFarming(str) {

    let elements = str.split(" ");

    let keyMaterialsQtys = {
        "shards": 0,
        "fragments": 0,
        "motes": 0
    };

    let junkMaterialsQtys = {};

    let legendaryItems = {
        "shards": "Shadowmourne",
        "fragments": "Valanyr",
        "motes": "Dragonwrath"
    };

    for (let i = 0; i < elements.length; i += 2) {
        let quantity = Number(elements[i]);
        let material = elements[i + 1].toLowerCase();

        if (material in keyMaterialsQtys) {
            keyMaterialsQtys[material] += quantity;

            if (keyMaterialsQtys[material] >= 250) {
                keyMaterialsQtys[material] -= 250;

                // if (material === "shards") {
                //     console.log("Shadowmourne obtained!");
                // } else if (material === "fragments") {
                //     console.log("Valanyr obtained!");
                // } else if (material === "motes") {
                //     console.log("Dragonwrath obtained!");
                // }

                let legendaryWon = legendaryItems[material];
                console.log(`${legendaryWon} obtained!`);
                break;
            }
        } else {
            if (material in junkMaterialsQtys) {
                junkMaterialsQtys[material] += quantity;
            } else {
                junkMaterialsQtys[material] = quantity;
            }
        }
    }

    let keyMaterialEntry = Object.entries(keyMaterialsQtys);
    keyMaterialEntry.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [material, quantity] of keyMaterialEntry) {
        console.log(`${material}: ${quantity}`);
    }

    let junkMaterialsEntry = Object.entries(junkMaterialsQtys);
    junkMaterialsEntry.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [material, quantity] of junkMaterialsEntry) {
        console.log(`${material}: ${quantity}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
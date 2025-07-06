function cardGame(input) {

    let players = new Map();

    for (let line of input) {
        let [name, cardList] = line.split(": ");
        let cards = cardList.split(", ");

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        let playerCards = players.get(name);

        for (let card of cards) {
            playerCards.add(card);
        }
    }

    const powerMap = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };

    const typeMap = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    };

    for (let [name, cardSet] of players) {
        let totalValue = 0;

        for (let card of cardSet) {
            let power = card.slice(0, -1);
            let type = card.slice(-1);

            power = powerMap[power] || Number(power);
            let typeValue = typeMap[type];

            totalValue += power * typeValue;
        }

        console.log(`${name}: ${totalValue}`);
    }
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD']);
cardGame(['John: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Alex: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'Alex: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'John: JD, JD, JD, JD']);
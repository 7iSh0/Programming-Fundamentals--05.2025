function bossRush(arr) {

    let n = Number(arr.shift());

    let bosses = "\\|([A-Z]{4,})\\|";
    let title = ":#([A-Za-z]+ [A-Za-z]+)#";
    
    let pattern = new RegExp(`^${bosses}${title}$`);

    for (let i = 0; i < n; i++) {

        let line = arr.shift();
        let match = pattern.exec(line);

        if (match) {
            let boss = match[1];
            let title = match[2];

            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}

bossRush((['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']));
bossRush((['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#']));
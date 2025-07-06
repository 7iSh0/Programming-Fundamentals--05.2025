function arenaTier(arr) {

    let gladiators = {};

    for (let line of arr) {

        if (line === "Ave Cesar") {
            break;
        }

        if (line.includes(" -> ")) {
            let [name, technique, skillStr] = line.split(" -> ");
            let skill = Number(skillStr);

            if (!gladiators[name]) {
                gladiators[name] = {};
            }

            if (!gladiators[name][technique] || gladiators[name][technique] < skill) {
                gladiators[name][technique] = skill;
            }

        } else if (line.includes(" vs ")) {
            let [glad1, glad2] = line.split(" vs ");

            if (gladiators[glad1] && gladiators[glad2]) {
                let techniques1 = Object.keys(gladiators[glad1]);
                let techniques2 = Object.keys(gladiators[glad2]);

                let common = techniques1.find(t => techniques2.includes(t));

                if (common) {
                    let total1 = Object.values(gladiators[glad1]).reduce((a, b) => a + b, 0);
                    let total2 = Object.values(gladiators[glad2]).reduce((a, b) => a + b, 0);

                    if (total1 > total2) {
                        delete gladiators[glad2];
                    } else if (total2 > total1) {
                        delete gladiators[glad1];
                    }
                }
            }
        }
    }

    let sorted = Object.entries(gladiators)
        .map(([name, skills]) => {
            let totalSkill = Object.values(skills).reduce((a, b) => a + b, 0);
            return { name, skills, totalSkill };
        })
        .sort((a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name));

    for (let glad of sorted) {
        console.log(`${glad.name}: ${glad.totalSkill} skill`);
        let sortedTechniques = Object.entries(glad.skills)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [tech, value] of sortedTechniques) {
            console.log(`- ${tech} <!> ${value}`);
        }
    }
}

arenaTier(['Peter -> BattleCry -> 400', 'Alex -> PowerPunch -> 300', 'Stefan -> Duck -> 200', 'Stefan -> Tiger -> 250', 'Ave Cesar']);
arenaTier(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar']);
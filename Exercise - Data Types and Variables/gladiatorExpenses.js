function gladiatorExpenses(lost, helmet, sword, shield, armor) {

    let brokenHelmet = parseInt(lost / 2);
    let brokenSword = parseInt(lost / 3);
    let brokenShield = parseInt(lost / 6);
    let brokenArmor = parseInt(brokenShield / 2);

    let totalExpenses = brokenHelmet * helmet + brokenSword * sword + brokenShield * shield + brokenArmor * armor;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
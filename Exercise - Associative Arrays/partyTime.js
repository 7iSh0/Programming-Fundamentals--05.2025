function partyTime(input) {

    let partyIndex = input.indexOf("PARTY");
    let invitedGuests = input.slice(0, partyIndex);
    let arrivedGuests = input.slice(partyIndex + 1);

    let vip = [];
    let regular = [];

    function isVip(str) {
        return str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57;
    }

    for (let guest of invitedGuests) {
        if (isVip(guest)) {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    for (let guest of arrivedGuests) {

        if (vip.includes(guest)) {
            vip.splice(vip.indexOf(guest), 1);
        } 
        
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }

    let totalGuests = vip.length + regular.length;
    console.log(totalGuests);
    
    vip.forEach(guest => console.log(guest));
    regular.forEach(guest => console.log(guest));
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 
    'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', 
    '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 
    'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 
    'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 
    'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 
    'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);
function aMinerTask(arr) {

    let resourcesArr = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);

        if (!resourcesArr.hasOwnProperty(resource)) {
            resourcesArr[resource] = 0;
        }
        // resourcesArr[resource] = resourcesArr[resource] || 0;
        resourcesArr[resource] += quantity; 
    }

    for (let res in resourcesArr) {
        console.log(`${res} -> ${resourcesArr[res]}`);
    }
}

aMinerTask(['Gold',
'155',
'Silver',
'10',
'Copper',
'17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);
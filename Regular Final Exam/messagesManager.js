function messagesManager(arr) {

    let capacity = Number(arr.shift());
    let users = new Map();

    for (let line of arr) {
        if (line === "Statistics") {
            break;
        }

        let parts = line.split("=");
        let command = parts[0];

        if (command === "Add") {
            let [, username, sentМessages, receivedМessages] = parts;
            let sent = parseInt(sentМessages, 10);
            let received = parseInt(receivedМessages, 10);

            addUser(username, sent, received);
        } else if (command === "Message") {
            let [, sender, receiver] = parts;

            sendMessage(sender, receiver);
        } else if (command === "Empty") {
            let username = parts[1];

            emptyUser(username);
        }
    }

    function addUser(username, sent, received) {
        if (users.has(username)) {
            return;
        }

        users.set(username, { sent, received });
    }

    function sendMessage(sender, receiver) {
        if (!users.has(sender) || !users.has(receiver)) {
            return;
        }

        let senderStats = users.get(sender);
        senderStats.sent++;

        checkUserCapacity(sender);

        let receiverStats = users.get(receiver);
        receiverStats.received++;

        checkUserCapacity(receiver);
    }

    function emptyUser(username) {
        if (username === "All") {
            users.clear();
        } else {
            users.delete(username);
        }
    }

    function checkUserCapacity(username) {
        if (!users.has(username)) {
            return;
        }

        let stats = users.get(username);
        let total = stats.sent + stats.received;

        if (total >= capacity) {
            console.log(`${username} reached the capacity!`);
            users.delete(username);
        }
    }

    function printStatistics() {
        console.log(`Users count: ${users.size}`);

        for (let [username, stats] of users) {
            let total = stats.sent + stats.received;
            console.log(`${username} - ${total}`);
        }
    }

    printStatistics();
}

messagesManager((["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"]));
messagesManager((["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"]));
messagesManager((["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"]));
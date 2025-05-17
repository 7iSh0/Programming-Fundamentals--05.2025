function login(arr) {

    let username = arr[0];
    let password = "";
    let attempts = 0;

    // Reverse the username to create the password
    // username.split("").reverse().join("");
    // or
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            attempts++;
            if (attempts < 4) {
                console.log("Incorrect password. Try again.");
            } else {
                console.log(`User ${username} blocked!`);
                break;
            }
        }    
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
function isTextOnly(userName) {
    return /^[A-Za-z]+$/.test(userName);
}
let userName = "";
while (!userName || !isTextOnly(userName)) {
    userName = prompt("Please enter your name (text only, no numbers):");
    if (!userName) {
        alert("Name cannot be empty. Please enter your name.");
    } else if (!isTextOnly(userName)) {
        alert("Name must contain only text characters and no numbers.");
    }
}
const greeting = `Hello, ${userName}! How are you?`;
alert(greeting);
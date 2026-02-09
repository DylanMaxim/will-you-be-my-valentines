const messages = [
    "Are you sure?",
    "You hate meeeeee :(",
    "Bubby... 🥺",
    "PLEAAAAAAAAAAAAAAAAAAAAAASE",
    "If you say no I will yumurta your house",
    "Mans gonna be bare sad innit fam :(",
    "This button doesnt work",
    "Error 404: No not found",
    "Say yes"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
const randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = prompt("Угадайте число от 1 до 10:");

userGuess = Number(userGuess);

if (userGuess === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (userGuess < randomNumber) {
        alert("Вы не угадали. Загаданное число больше!");
        console.log("Вы не угадали. Загаданное число больше!");
    } else {
        alert("Вы не угадали. Загаданное число меньше!");
        console.log("Вы не угадали. Загаданное число меньше!");
    }
}

console.log(`Загаданное число: ${randomNumber}`);

let userName = prompt("Введите ваше имя:");

let userAge = prompt("Введите ваш возраст:");

userAge = Number(userAge);

alert(`Привет, ${userName}! Тебе ${userAge} лет.`);

if (userAge >= 18) {
    alert("Вы совершеннолетний.");
    console.log("Вы совершеннолетний.");
} else {
    alert("Вы несовершеннолетний.");
    console.log("Вы несовершеннолетний.");
}

console.log(`Привет, ${userName}! Тебе ${userAge} лет.`);

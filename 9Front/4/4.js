const correctPassword = "12345";

let userPassword = prompt("Введите пароль:");

if (!userPassword) {
    alert("Пароль не может быть пустым!");
    console.log("Пароль не может быть пустым!");
} else if (userPassword === correctPassword) {
    alert("Доступ разрешен");
    console.log("Доступ разрешен");
} else {
    alert("Доступ запрещен");
    console.log("Доступ запрещен");
}

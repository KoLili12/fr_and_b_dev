let num1 = prompt("Введите первое число:");
num1 = Number(num1);

let num2 = prompt("Введите второе число:");
num2 = Number(num2);

let operator = prompt("Введите оператор (+, -, *, /):");

if (operator === "+") {
    alert(`Результат: ${num1 + num2}`);
    console.log(`Результат: ${num1 + num2}`);
} else if (operator === "-") {
    alert(`Результат: ${num1 - num2}`);
    console.log(`Результат: ${num1 - num2}`);
} else if (operator === "*") {
    alert(`Результат: ${num1 * num2}`);
    console.log(`Результат: ${num1 * num2}`);
} else if (operator === "/") {
    if (num2 === 0) {
        alert("Ошибка: деление на ноль!");
        console.log("Ошибка: деление на ноль!");
    } else {
        alert(`Результат: ${num1 / num2}`);
        console.log(`Результат: ${num1 / num2}`);
    }
} else {
    // Если оператор неверный
    alert("Неверный оператор");
    console.log("Неверный оператор");
}

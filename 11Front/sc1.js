// Функция вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция изменения цвета фона страницы
function changeBackgroundColor(color) {
    const videoElement = document.querySelector(body);
    videoElement.backgroundColor = videoPath;
}

// Функция переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = element.style.display === "none" ? "block" : "none";
    }
}

function logCurrentTime() {
    document.addEventListener('DOMContentLoaded', () => {
        const [navigation] = performance.getEntriesByType('navigation');
        const loadTime = navigation.loadEventEnd - navigation.startTime;
        const loadTimeInSeconds = (loadTime / 1000).toFixed(2);
        alert("Время загрузки страницы:" + loadTimeInSeconds + "секунд");
    });
}

// Функция вывода текущего времени в консоль
function logCurrentTime() {
    document.addEventListener('DOMContentLoaded', () => {
        const [navigation] = performance.getEntriesByType('navigation');
        const loadTime = navigation.loadEventEnd - navigation.startTime;
        const loadTimeInSeconds = (loadTime / 1000).toFixed(2);
        alert("Время загрузки страницы: &{loadTimeInSeconds} секунд");
    });

}

// Функция сброса цвета фона к исходному
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Вызов функций в необходимом порядке
showMessage("Скрипт успешно загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
    changeBackgroundColor("blue");
    //resetBackgroundColor();
    toggleVisibility(".content");
    updateHeadingFromUTM();
});

//13task
document.getElementById("practice").addEventListener("click", () => {
    alert("Вы кликнули на заголовок - так держать!");
});

const Topics = [
    "Базовое бэкенд-приложение",
    "HTTP-запросы",
    "JSON и работа с ним",
    "HTTP-ответы",
    "Проектирование API",
    "Роутинг и его настройка",
    "NoSQL базы данных",
    "Обеспечение авторизации и доступа пользователей",
    "Работа сторонних сервисов уведомления и авторизации",
    "Основы ReactJS",
    "Работа с компонентами динамической DOM",
    "Использование хуков в React",
    "Основы микросервисной архитектуры",
    "Разработка классических модулей веб-приложений",
];

document.getElementById("change").addEventListener("click", () => {
    const tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = ""; // Очистка таблицы

    Topics.forEach((topic, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${index + 1}</td><td>${topic}</td>`;
        tableBody.appendChild(row);
    });
});


const Photo = document.getElementById("photo");
Photo.addEventListener("mouseover", () => {
    Photo.style.width = "25%";
    Photo.style.height = "25%";
    Photo.style.transition = 'transform 0.4s ease-in-out';
    Photo.style.transform = 'rotate(360deg)';

});

Photo.addEventListener("mouseout", () => {
    Photo.style.width = "20%";
    Photo.style.height = "20%";
    Photo.style.transform = 'rotate(0deg)';
});

Photo.addEventListener("click", () => {
    Photo.src = "Любимый_препод.jpg";
});

// Сообщение по двойному клику
Photo.addEventListener("dblclick", () => {
    alert("Не налегай, у меня не так много любимых преподавателей");
});


//14task
const title = document.getElementById('paragraf');
title.addEventListener('mouseover', () => {
    title.style.transition = 'transform 0.3s ease-in-out';
    title.style.transform = 'scale(1.4)';
});

title.addEventListener('mouseout', () => {
    title.style.transform = 'scale(1)';
});
const txt = document.getElementById('text');

txt.addEventListener('click', () => {
    txt.style.transition = 'background-color 0.4s ease';
    if (txt.style.backgroundColor === 'whitesmoke') {
        txt.style.backgroundColor = '';
    } else {
        txt.style.backgroundColor = 'whitesmoke';
    }
});
const showLectures = document.getElementById('showLectures');
const lecturesTable = document.getElementById('lecturesTable');

showLectures.addEventListener('click', () => {
    lecturesTable.style.transition = 'opacity 0.5s ease-in-out';
    if (lecturesTable.style.display === 'none') {
        lecturesTable.style.display = 'table';
        setTimeout(() => {
            lecturesTable.style.opacity = '1';
        }, 10);
    } else {
        lecturesTable.style.opacity = '0';
        setTimeout(() => {
            lecturesTable.style.display = 'none';
        }, 500);
    }
});
const form2 = document.getElementById('form2');
const formMessage = document.getElementById('formMessage');

form2.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.style.display = 'block';
    formMessage.style.transition = 'color 0.5s ease-in-out';
    formMessage.style.color = 'red';
});


changeBackgroundColor(black);


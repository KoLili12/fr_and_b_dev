const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push('Тема 4');
practices.unshift('Практика 0');

lectures.forEach((lecture, index) => {
    console.log(`${index + 1}. ${lecture}`);
});

practices.forEach((practice, index) => {
    console.log(`${index + 1}. ${practice}`);
});

function arrayToString(array) {
    return array.join(', ');
}

console.log('Лекции:', arrayToString(lectures));
console.log('Практики:', arrayToString(practices));

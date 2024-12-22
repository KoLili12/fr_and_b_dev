function filterLecturesByO(lectures) {
    return lectures.filter(topic => topic.startsWith('О'));
}

const lectures = ['Общая физика', 'Тема 1', 'Основы программирования', 'Тема 2'];
const filteredLectures = filterLecturesByO(lectures);

console.log("\nТемы, начинающиеся с буквы 'О':");
filteredLectures.forEach((index, lecture) => {
    console.log(`${index + 1}. ${lecture}`);
});
function gameSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2) {
        return "Зима";
    } else {
        return "Неправильный номер месяца";
    }
};

function wordGuessGame() {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const shuffledWords = words.sort(() => Math.random() - 0.5);
    // Выводим перемешанный массив пользователю
    alert(`${shuffledWords.join(', ')}`);
    // Задаем вопросы пользователю
    const firstGuess = prompt('Чему равнялся первый элемент массива?').toLowerCase();
    const lastGuess = prompt('Чему равнялся последний элемент массива?').toLowerCase();

    // Проверяем ответы пользователя
    if (firstGuess === words[0].toLowerCase() && lastGuess === words[words.length - 1].toLowerCase()) {
        alert('Поздравляем! Вы угадали оба элемента!');
    } else if (firstGuess === words[0].toLowerCase() || lastGuess === words[words.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        return 'Вы ответили неверно. Попробуйте еще раз!';
    }
};
// Задание 1
// const string = 'js';
// console.log(word.toUpperCase());


// Задание 2
// function searchStart(array, searchString) {
//     const lowerSearchString = searchString.toLowerCase();
//     const matchingStrings = array.filter(str => str.toLowerCase().startsWith(lowerSearchString));

//     return matchingStrings;
// };

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гр'));
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


// Задание 3
// const roundDown = Math.floor(32.58884);
// const roundUp = Math.ceil(32.58884);
// const roundNearest = Math.round(32.58884);

// console.log(roundDown);
// console.log(roundUp);
// console.log(roundNearest);


// Задание 4
// const numbers = [52, 53, 49, 77, 21, 32];

// const minNumber = Math.min(...numbers);
// const maxNumber = Math.max(...numbers);

// console.log(minNumber);
// console.log(maxNumber);


// Задание 5
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// };

// console.log(getRandomInt(1, 10));


// Задание 6
// function getRandomArr(maxNumber) {
//     const arrayLength = Math.floor(maxNumber / 2);
//     const randomNumbers = [];

//     for (let i = 0; i < arrayLength; i++) {
//         const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
//         randomNumbers.push(randomNumber);
//     }

//     return randomNumbers;
// };

// console.log(getRandomArr(15));
// console.log(getRandomArr(9));


// Задание 7
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const result = getRandomInt(5, 10);
// console.log(result);


// Задание 8
// let myDate = new Date();
// console.log(myDate);


// Задание 9
// const currentDate = new Date();
// const futureDate = new Date();
// futureDate.setDate(currentDate.getDate() + 73);

// console.log(futureDate);


// Задание 10
function formatDateTime(inputDate) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const days = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    const myDate = new Date(inputDate);
    const formattedDate = `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()}г. - это ${days[myDate.getDay()]}.
    \nВремя: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;

    return formattedDate;
};

const currentDate = new Date();
const formattedDateTime = formatDateTime(currentDate);
console.log(formattedDateTime);
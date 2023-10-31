/*
let password = 'пароль'; // Задание 1

let userInput = prompt('Введите пароль:');

if (userInput === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}
*/
/*
let c = 5; // Задание 2

if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно');
}

c = 0
c > 0 && c < 10 // false
c = 10
c > 0 && c < 10 // false
c = -3
c > 0 && c < 10 // false
c = 2
c > 0 && c < 10 // true 

let d = 168 // Задание 3;
let e = 15;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = '2'; // Задание 4
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));
*/

let monthNumber = prompt('Введите номер месяца');  // Задание 5

switch (monthNumber) {
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    case '12':
        console.log('Зима');
        break;
    default: console.log('Такого месяца не существует!');
        break;
}

// Задание 1
// function minValue(a, b) {
//     return (a < b) ? a : b;
// }

// console.log(minValue(8, 4));
// console.log(minValue(6, 6));


// Задание 2
// function numParity(a) {
//     return (a % 2 === 0) ? 'Число четное' : 'Число нечетное';
// }
// console.log(numParity(2))


// Задание 3.1
// function numExponentiation(a) {
//     let Exponentiation = a ** 2;
//     console.log(Exponentiation)
// }

// numExponentiation(5);


// Задание 3.2
// function numExponentiation(a) {
//     return a ** 2;
// }

// console.log(numExponentiation(6));


// Задание 4
// function userAge() {
//     let age = prompt('Сколько вам лет?');
//     age = parseInt(age)

//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age <= 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!');
//     }
// }

// userAge();


// Задание 5
// function numCheck(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
// }

// console.log(numCheck(5, 10));
// console.log(numCheck("abc", 10));
// console.log(numCheck(7, "def"));
// console.log(numCheck("xyz", "123"));


// Задание 6
// function userCubing() {
//     let numCubing = prompt('Введите число:');
//     let numCheck = parseInt(numCubing);

//     if (!isNaN(numCheck)) {
//         let cubing = numCheck ** 3;
//         return `${numCheck} в кубе равняется ${cubing}`;
//     } else {
//         return 'Переданный параметр не является числом';
//     }
// }

// // alert(userCubing());  // Вызов функции один раз

// for (let i = 0; i <= 10; i++) {    // Проверка чисел от 0 до 10
//     console.log(userCubing());
// }


// Задание 7
const circle1 = {
    radius: 10,

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 15,

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log('Площадь circle1:', circle1.getArea());
console.log('Периметр circle1:', circle1.getPerimeter());

console.log('Площадь circle2:', circle2.getArea());
console.log('Периметр circle2:', circle2.getPerimeter());
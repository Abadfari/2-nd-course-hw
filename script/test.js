// Напишите программу, которая будет выводить в консоль сообщения пользователя, введенные через 
// prompt
// , пока пользователь не введет 
// break
// . Если пользователь введёт в 
// prompt
//  
// continue
// , то в консоль ничего не нужно выводить, а пользователь должен продолжить вводить сообщения.

// while (true) {
//     const message = prompt('Введите break или continue')
//     if (message == "break") {
//         break;
//     }
// }

// Возьмите код ниже и допишите его так, как предлагают TODO-блоки в комментариях.

const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
const multipleByTwoFib = fibonacci.map(item => item * 2)
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
const plusTenFib = fibonacci.map(item => item + 10)
// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
const onlyBigFib = fibonacci.filter(item => item > 3)

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]

// ТАЙМЕР
const timer = (deadline) => {
    if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
        console.log('Передано некорректное число'); // выводим сообщение
        return; // выходим из функции
    }

    let time = deadline;
    const interval = setInterval(() => { time -= 1; console.log(time); }, 1000);

    setTimeout(() => { clearInterval(interval); console.log('Время истекло!') }, deadline * 1000)
};

const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
timer(deadline);
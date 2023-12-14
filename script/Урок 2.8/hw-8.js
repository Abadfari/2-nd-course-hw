
// Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// people.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
// });

// console.log(people.sort());


// Задание 2
// function isPositive(number) {
//     return number > 0;
// };

// function isMale(person) {
//     return person.gender === 'male';
// };

// function filter(arr, ruleFunction) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (ruleFunction(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale));


// Задание 3
// function runTask() {
//     let startTime = 0;

//     const interval = setInterval(() => {
//         console.log(new Date());
//         startTime += 3;
//         if (counter >= 30) {
//             clearInterval(interval);
//             console.log('30 секунд прошло!');
//         }
//     }, 3000);
// };

// console.log(runTask());


// Задание 4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// });


// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));
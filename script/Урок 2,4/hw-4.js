/*  
for (let i = 0; i < 2; i++) { // Задание 1
     console.log("Привет");
} 



for (let i = 1; i <= 5; i++) { // Задание 2
    console.log(i);
}



for (let i = 7; i <= 22; i++) {  // Задание 3
    console.log(i);
}




const obj = {              // Задание 4
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (let Name in obj) {
    console.log(`${Name} - зарплата ${obj[Name]} долларов.`)
}


let n = 1000;               // Задание 5
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}

console.log("Результат деления: " + n);
console.log("Количество итераций: " + num);

 */

const firstFriday = 5;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
/*
let a = 10; // Задание 1
alert(a);
a = 20;
alert(a);
*/

/*
let firstIPhoneYear = 2007; // Задание 2
alert(firstIPhoneYear);
*/

/*
let creatorofJavaScript = "Brendan Eich"; // Задание 3
alert(creatorofJavaScript)
*/

/*
let num1 = 10; // Задание 4
let num2 = 2;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert(sum);
alert(difference);
alert(product);
alert(quotient);
*/

/*
let result = (2 ** 5); // Задание 5
alert(result);
*/

/*
let a = 9; // Задание 6
let b = 2;
let result = a % b;
alert(result);
*/

/*
let num = 1; // Задание 7
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
*/

/*
let age = prompt("Сколько вам лет?"); // Задание 8
alert("Ваш возраст " + age);
*/


let user = {  // Задине 9.0
    name: "Jack Nicholson",
    age: 30,
    isAdmin: true
};

user["city of residence"] = "Volgograd";  // Задине 9.1

user.age = 57;  // Задине 9.2

delete user["city of residence"];  // Задине 9.3

let info = prompt("Какую информацию хотите узнать о пользователе?"); // Задание 9.4

if (info in user) {
    alert("Запрошенная информация: " + user[info]);
};
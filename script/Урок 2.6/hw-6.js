// Task 1
// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] == 10) break;
// 	console.log(numbs[i]);
// }

// Task 2
// const numbs = [1, 5, 4, 10, 0, 3];
// const result = numbs.indexOf(4);
// console.log('Индекс =', result);

// Task 3
// const numbs = [1, 3, 5, 10, 20];
// const result = numbs.join(' ');
// console.log(result);

// Task 4
// let arr = []

// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr[i][j] = 1;
//   };
// };
// console.log(arr);

// Task 5
// const numbs = [1, 1, 1];
// numbs.push(2, 2, 2);
// console.log(numbs);

// Task 6
// const arrNumb = [9, 8, 7, 'a', 6, 5];
// const arrSort = arrNumb.sort((a, b) => a - b);
// let result = arrSort.filter(item => typeof item === 'number');
// console.log(result);

// Task 7
// function guessingGame() {
//     const arr = [9, 8, 7, 6, 5];
//     const inputUser = +prompt('Угадай число от 5 до 9');
//     if (arr.includes(inputUser)) {
//         alert('Угадал!');
//     } else {
//         alert('Не угадал.');
//     }
// }
// guessingGame();

// Task 8
// let str = 'abcdef';
// let reversedStr = str.split('').reverse().join('');
// console.log(reversedStr);

// Task 9
// const arr = [[1, 2, 3,], [4, 5, 6]];
// const result = [].concat(...arr);
// console.log(result);

// Task 10
// const numbers = [2, 4, 6, 8, 10];
// for (let i = 0; i < numbers.length - 1; i++) {
//     const sum = numbers[i] + numbers[i + 1];
//     console.log(`Сумма: ${sum}`);
// }

// Task 11
// const arr = [4, 9, 10, 7,];
// const result = arr.map(el => el ** 2);
// console.log(result);

// Task 12
// function wordLengths(str) {
//     const lengthsArr = str.map(word => word.length);
//     return lengthsArr;
// }

// const word = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// const length = wordLengths(word);
// console.log(length)

// Task 13
function filterPositive(array) {
    const result = array.filter(number => number < 0);
    return result;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));
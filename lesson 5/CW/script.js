// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let number = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c)
//     }
// }
// number(9, 1, 16);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let number = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// number(1, 5, 3);

// - створити функцію яка повертає найбільше число з масиву

// let numberArray = (array) => {
//     let max = array [0];
//     for (const arrayElement of array) {
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     return max;
// }
// console.log(numberArray([30, 40, 60]));

// - створити функцію яка повертає найменьше число з масиву

// let numberArray = (array) => {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement<min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
// console.log(numberArray([70, 20, 50]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumArray = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// console.log(sumArray([20, 10, 10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrayFn = (array) => {
//     let result = 0;
//     for (const arrayElement of array) {
//         result += arrayElement / array.length;
//     }
//     return result;
// }
// console.log(arrayFn([15, 10, 90, 100]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let arrayFn = (array) => {
//     let min = array[0];
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     console.log(max);
//     return min;
// }
// arrayFn([2, 10, 17, 26]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let randomFn = (array, size) => {
//     for (let i=0; i<size; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     return array;
// }
// console.log(randomFn( [],5));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arrayFn = (array, size, limit) => {
//     for (let i=0; i<size; i++) {
//         array[i] =  Math.round(Math.random() * limit);
//     }
//     return array;
// }
// console.log(arrayFn([],10,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arrayFn = (array) => {
//     let reverseArray = [];
//     for (let i=array.length-1; i>=0; i--) {
//         let number = array[i];
//         reverseArray.push(number);
//     }
//     return reverseArray;
// }
// console.log(arrayFn([10,20,50]));
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function numbers(a,b,c) {
//     if (a<b && a<c) {
//         console.log(a);
//     } else if (b<a && b<c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// numbers(7,8,1);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numbers(a,b,c) {
//     if (a>b && a>c) {
//         console.log(a);
//     } else if (b>a && b>c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// numbers(5,10,6);

// - створити функцію яка повертає найбільше число з масиву

// let arrayNumbers = [207, 35, 1675, 3];
//
// function arrayMaxNumber(array){
//     let maxNumber = array[0];
//     for (let number of array) {
//         if (number > maxNumber) {
//             maxNumber = number;
//         }
//     }
//     return maxNumber;
// }
// console.log(arrayMaxNumber(arrayNumbers));

// - створити функцію яка повертає найменьше число з масиву

// let arrayNumbers = [105, 15, 154, 3876];
//
// function arrayMinNumber(array){
//     let minNumber = array[0];
//     for (let number of array) {
//         if (number < minNumber) {
//             minNumber = number;
//         }
//     }
//     return minNumber;
// }
// console.log(arrayMinNumber(arrayNumbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arrayNumbers = [10, 10, 10];
//
// function arraySum(array) {
//     let sum = 0;
//     for (let number of array) {
//         sum += number;
//     }
//     return sum;
// }
// console.log(arraySum(arrayNumbers));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [10, 20, 30];
//
// function arrayNumbers(array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum / array.length;
// }
//
// console.log(arrayNumbers(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function maxNumber(numbers) {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (let number of arguments) {
//         if (number > max) {
//             max = number;
//         }
//         if (number < min) {
//             min = number;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(maxNumber(15, 9, 10));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let array =[];
//
// function randomNumbers(length) {
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random()*100);
//     }
//     return array;
// }
// console.log(randomNumbers(7));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let array = [];
//
// function randomNumbers(length, limit) {
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.round(Math.random()*limit);
//     }
//     return array;
// }
// console.log(randomNumbers(7, 100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [24, 56, 76];
//
// function reverseArray(array) {
//     let arr = [];
//     for (i = array.length - 1; i >= 0; i--) {
//         let number = array[i];
//         arr.push(number);
//
//     }
//     return arr;
// }
//
// console.log(reverseArray(array));
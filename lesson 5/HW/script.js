// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника

// let area = (a, b) => a * b;
// console.log(area(10,10));

// АБО

// let area = (a, b) => {
//     return a * b
// }
// console.log(area(10,10));

// - створити функцію яка обчислює та повертає площу кола

// let area = (r) => Math.PI * r ** 2;
// console.log(area(5));

// - створити функцію яка обчислює та повертає площу циліндру

// let area = (r, h) => 2 * Math.PI * r * h;
// console.log(area(10, 15));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [10, 20, 50];
//
// let arrayFn = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arrayFn(array);

// АБО

// let restFn = (...array) => {
//     for (const element of array) {
//         console.log(element);
//     }
// }
// restFn(1, 5, 10);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraphFn = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// paragraphFn('Hello!');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let liFunction = (text) => {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         </ul>`);
// }
//
// liFunction('Hello!');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let liFunction = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// liFunction('Hello!', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrayFn = (array) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arrayFn([100, true, 'Hello']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let array = [
//     { id: 5, name: 'Five', age: 10},
//     { id: 6, name: 'Six', age: 20}
// ]
//
// let arrayFn = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age} </div>`)
//     }
// }
// arrayFn(array);
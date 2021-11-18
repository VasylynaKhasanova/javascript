// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a, b) {
//     return a * b;
// }
//
// console.log(area(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function area(r) {
//     return 3.14 * r ** 2;
// }
//
// console.log(area(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function area(h, r) {
//     return 2 * 3.14 * r * h;
// }
// console.log(area(5, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [10, 20, 30];
//
// function arrayOutput(array) {
//     for (i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
//
// arrayOutput(array);

// АБО

// let array = [10, 20, 30];
//
// function arrayOutput(array) {
//     for (number of array) {
//         console.log(number);
//     }
// }
//
// arrayOutput(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function paragraph(stringText) {
//     document.write(`<p>${stringText}</p>`);
// }
// paragraph('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function creatList(text) {
//     document.write(`<ul>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                     </ul>`)
// }
//
// creatList('identical text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function creatList(text, number) {
//     document.write(`<ul>`)
//     for (i = 1; i <= number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// creatList('some text', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [45, 'text', true];
//
// function mixArray(array) {
//     document.write(`<ul>`)
//     for (i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// mixArray(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {id: 25, name: 'Cat', age: 21},
//     {id: 46, name: 'Dog', age: 66},
//     {id: 54, name: 'Cow', age: 85},
// ]
//
// function arrayObjects(array) {
//     for (i = 0; i < array.length; i++) {
//         document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`);
//     }
// }
// arrayObjects(array);

// АБО

// function arrayObjects(array) {
//     for (let arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`);
//     }
// }
// arrayObjects(array);


// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [1, 2, 3, 4, 5];
// console.log(number);
//
// let string = ['yellow', 'black', 'green', 'white', 'gray'];
// console.log(string);
//
// let arr = [400, 'red', true, 678, 'violet'];
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 25;
// arr[1] = 47;
// arr[2] = 60;
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>text</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>text ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>text</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>text ${i}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// АБО

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let xxx of arr) {
//     console.log(xxx);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let str = ['yellow', 'black', 'green', 'white', 'gray', 'violet', 'red', 'aquamarine', 'orange', 'turquoise'];
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// АБО

// let str = ['yellow', 'black', 'green', 'white', 'gray', 'violet', 'red', 'aquamarine', 'orange', 'turquoise'];
// for (let p of str) {
//     console.log(p);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


// let mix = [77, 'red', false, 567, 'yellow', true, 87, 'black', 107, false];
// for (let i = 0; i < mix.length; i++) {
//     console.log(mix[i]);
// }

// АБО

// let mix = [77, 'red', false, 567, 'yellow', true, 87, 'black', 107, false];
// for (let j of mix) {
//     console.log(j);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let elements = [65, 'turquoise', 890, false, 'green', true, 169, false, 'pink', true];
// for (let i = 0; i < elements.length; i++) {
//     if (typeof elements[i] === 'boolean') {
//         console.log(elements[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let elements = [65, 'turquoise', 890, false, 'green', true, 169, false, 'pink', true];
// for (let i = 0; i<elements.length; i++) {
//     if (typeof elements[i] === 'number') {
//         console.log(elements[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let elements = [65, 'turquoise', 890, false, 'green', true, 169, false, 'pink', true];
// for (let i = 0; i < elements.length; i++) {
//     if (typeof elements[i] === 'string') {
//         console.log(elements[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[0] = 10;
// array[1] = 'pink';
// array[2] = false;
// array[3] = 'orange'
// array[4] = true;
// array[5] = 789;
// array[6] = true;
// array[7] = 569;
// array[8] = 'white';
// array[9] = false;
// for (let i = 0; i<array.length; i++) {
//     console.log(array[i]);
// }

// АБО

// let array = [];
// array[0] = 10;
// array[1] = 'pink';
// array[2] = false;
// array[3] = 'orange'
// array[4] = true;
// array[5] = 789;
// array[6] = true;
// array[7] = 569;
// array[8] = 'white';
// array[9] = false;
// for (let g of array) {
//     console.log(g);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`поточний номер кроку ${i}`);
//     document.write(`<div>поточний номер кроку ${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`поточний номер кроку ${i}`);
//     document.write(`<div>поточний номер кроку ${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(`поточний номер кроку ${i}`);
//     document.write(`<div>поточний номер кроку ${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (!(i % 2)) {
//         console.log(`поточний номер кроку ${i}`);
//         document.write(`<div>поточний номер кроку ${i}</div>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(`поточний номер кроку ${i}`);
//         document.write(`<div>поточний номер кроку ${i}</div>`);
//     }
// }


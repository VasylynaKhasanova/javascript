// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string = 'hello world';
// console.log(string.length);

// let stringNumb = 'lorem ipsum';
// console.log(stringNumb.length);

// let stringLength= 'javascript is cool';
// console.log(stringLength.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string = 'hello world';
// console.log(string.toUpperCase());

// let stringUp = 'lorem ipsum';
// console.log(stringUp.toUpperCase());
//
// let stringUpper= 'javascript is cool';
// console.log(stringUpper.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let string = 'HELLO WORLD';
// console.log(string.toLowerCase());
//
// let stringLorem = 'LOREM IPSUM';
// console.log(stringLorem.toLowerCase());
//
// let stringJava = 'JAVASCRIPT IS COOL';
// console.log(stringJava.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let string = ' dirty string   ';
// console.log(string.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr)
// document.writeln(arr);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, length) => {
//     return str.substring(0, length);
// }
// let str = 'Каждый охотник желает знать';
// let result = delete_characters(str, 6);
// document.write(result);
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {
//     return str.replaceAll(' ', '-').toUpperCase();
// }
// let str = "HTML JavaScript PHP";
// document.write(insert_dash(str));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let lowerToUpper = (str) => {
//     return str[0].toUpperCase() + str.slice(1);
// }
// let str = 'hello';
// document.write(lowerToUpper(str));
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let capitalize = (str) => {
//     return str.split(' ').map(firstWord => firstWord.charAt(0).toUpperCase() + firstWord.slice(1)).join(' ');
// }
// document.write(capitalize('hello world'));
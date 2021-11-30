// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let text = document.getElementById('content');
console.log(text.innerText);

// -- отримує текст з блоку з id "rules"

let content = document.getElementById('rules');
console.log(content.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

let changeText = document.getElementById('content');
    changeText.innerText = 'new text';

// -- замініть текст параграфа з id 'rules' на будь-який інший

let newText = document.getElementById('rules');
    newText.innerText = 'new text';

// -- змініть кожному елементу колір фону на червоний

let firstElement = document.getElementsByTagName('div');
for (const element of firstElement) {
    element.style.background = 'red';
}
let secondElement = document.getElementsByTagName('p');
for (const element of secondElement) {
    element.style.background = 'red';
}
let thirdElement = document.getElementsByTagName('ul');
for (const element of thirdElement) {
    element.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій

let firstElementText = document.getElementsByTagName('div');
for (const element of firstElementText) {
    element.style.color = 'blue';
}
let secondElementText = document.getElementsByTagName('p');
for (const element of secondElementText) {
    element.style.color = 'blue';
}
let thirdElementText = document.getElementsByTagName('ul');
for (const element of thirdElementText) {
    element.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let list = document.getElementById('rules');
console.log(list.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let elements = document.getElementsByClassName('fc_rules');
for (const element of elements) {
    element.style.color = 'red';
}


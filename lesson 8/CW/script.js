// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)

let getMain = document.getElementById('main_header');
getMain.classList.add('sep-2021');

// b) робить шириниу елементу ul 400px

let element = document.getElementsByTagName('ul');
for (const item of element) {
    item.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let newWidth = document.getElementsByClassName('linkList');
for (const newWidthElement of newWidth) {
    newWidthElement.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let newText = document.getElementsByClassName('listElement2');
for (const newTextElement of newText) {
    newTextElement.innerText = 'New Text';
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let elementsLi = document.getElementsByTagName('li');
for (const element of elementsLi) {
    element.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let getElements = document.getElementsByTagName('a')
for (const element of getElements) {
    element.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let allElements = document.getElementsByTagName('a');
for (const element of allElements) {
    if(element.text === 'link3') element.style.fontSize += '40px';
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let everyElement = document.getElementsByTagName('a');
for (const element of everyElement) {
    element.classList.add(`element_${element.text}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subElements = document.getElementsByClassName('sub-header');
// for (const subElement of subElements) {
//     subElement.style.background = prompt('Type any color');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment .
// Колір отримати з prompt()

// let subHeader = document.querySelectorAll('.sub-header');
// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.textContent === 'content 2 segment') subHeaderElement.style.color = prompt('Type any color')
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let getElem = document.getElementsByClassName('content_1');
// for (const element of getElem) {
//     element.textContent = prompt('Type your text');
// }

// l) отримати елементи p та змінити їм padding на 20px

let pElem = document.getElementsByTagName('p');
for (const element of pElem) {
    element.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let getText = document.getElementsByClassName('text2');
for (const textElement of getText) {
    textElement.innerText = 'sep-2021';
}
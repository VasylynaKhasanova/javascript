// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let newElement = document.createElement('div');
newElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
newElement.style.background = 'green';
newElement.style.color = 'white';
newElement.style.fontSize = '40px';
newElement.innerText = 'some text';

document.body.appendChild(newElement);
document.body.appendChild(newElement.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
let array = ['Main', 'Products', 'About us', 'Contacts'];
    for (const element of array) {
        let li = document.createElement('li');
        li.innerText = element;
        let wrap = document.getElementsByClassName('menu');
        wrap[0].appendChild(li);
}
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const element of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${element.title} ${element.monthDuration}`;
//     document.body.appendChild(divElement);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = element.title;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = element.monthDuration;

    divElement.append(h1, p);
    document.body.appendChild(divElement);
}

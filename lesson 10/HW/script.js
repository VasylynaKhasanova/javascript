// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let elementToHide = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     elementToHide.style.display = 'none';
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// document.getElementById('buttonToHide').onclick = () => document.getElementById('buttonToHide').style.display = 'none';

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// document.getElementById('confirm').onclick = function () {
//     let ageOfUser = document.getElementById('age').value;
//     if (+ageOfUser < 18) {
//         alert('Доступ заборонено')
//     } else if (+ageOfUser >= 18) {
//         alert('Доступ дозволено');
//     } else {
//         alert('Please, type your age correctly')
//     }
//         }
// - Создайте меню, которое раскрывается/сворачивается при клике
//
let menu = document.getElementsByClassName('menu')[0];
let click = document.getElementsByClassName('click')[0];
click.onclick = function () {
    menu.classList.toggle('hide');
}
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let listOfComments = [
    {title: 'First', body: 'lorem ipsum dolo sit ameti'},
    {title: 'Second', body: 'lorem ipsum dolo sit ameti'},
    {title: 'Third', body: 'lorem ipsum dolo sit ameti'}
];
for (const element of listOfComments) {

    let divElement = document.createElement('div');
    divElement.innerText = element.title;

    let pElement = document.createElement('p');
    pElement.innerText = element.body;

    let btn = document.createElement('button');
    btn.innerText = 'Hide';
    btn.style.marginBottom = '8px';

    let divBorder = document.createElement('div');
    divBorder.classList.add('style');

    btn.onclick = function () {
        pElement.style.display = 'none';
    }
    divBorder.append(divElement, pElement, btn)
    document.body.append(divBorder);
}


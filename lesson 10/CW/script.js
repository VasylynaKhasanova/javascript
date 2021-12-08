// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let button = document.getElementsByClassName('button')[0];
//
// button.onclick = function () {
//     let first = document.forms.form1.inFirst.value;
//     let second = document.forms.form1.inSecond.value;
//     let third = document.forms.form2.inThird.value;
//     let fourth = document.forms.form2.inFourth.value;
//     console.log(first, second, third, fourth);
// }
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let button = document.getElementById('createTable');
// button.onclick = function () {
//     let td = document.getElementById('td').value;
//     let tr = document.getElementById('tr').value;
//     let text = document.getElementById('tableText').value;
//     let table = document.createElement('table');
//
//     for (let i = 0; i < tr; i++) {
//         let tr = document.createElement('tr');
//         for (let i = 0; i < td; i++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.innerText = text;
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let array = ['срака', 'йолоп', 'дідько', 'трясця'];
// let button = document.getElementsByClassName('btn')[0];
// button.onclick = function () {
//     let word = document.getElementById('text').value;
//     for (const element of array) {
//         if (element === word) {
//             alert('Please, be polite!')
//         }
//     }
// }
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let array = ['срака', 'йолоп', 'дідько', 'трясця'];
// let button = document.getElementsByClassName('btn')[0];
// button.onclick = function () {
//     let sentence = document.getElementById('text').value;
//     for (const element of array) {
//         if (sentence.includes(element)) {
//             alert('Please, be polite!');
//         }
//
//     }
// }
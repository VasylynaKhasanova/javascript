// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let userArray = [
//     new User(2, 'some name', 'some surname', 'some email', 3801111),
//     new User(5, 'some name', 'some surname', 'some email', 3801111),
//     new User(7, 'some name', 'some surname', 'some email', 3801111),
//     new User(4, 'some name', 'some surname', 'some email', 3801111),
//     new User(3, 'some name', 'some surname', 'some email', 3801111),
//     new User(6, 'some name', 'some surname', 'some email', 3801111),
//     new User(9, 'some name', 'some surname', 'some email', 3801111),
//     new User(1, 'some name', 'some surname', 'some email', 3801111),
//     new User(10, 'some name', 'some surname', 'some email', 3801111),
//     new User(8, 'some name', 'some surname', 'some email', 3801111)
// ]
// console.log(userArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterArray = userArray.filter(value => {
//     return value.id % 2 === 0;
// });
// console.log(filterArray);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// userArray.sort((a, b) => a.id - b.id);
// console.log(userArray);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, oder) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.oder = oder;
//     }
// }

// let clientArray = [
//     new Client(3, 'some name', 'some surname', 'some email', 3801111, ['item', 'item', 'item']),
//     new Client(9, 'some name', 'some surname', 'some email', 3801111, ['item', 'item']),
//     new Client(1, 'some name', 'some surname', 'some email', 3801111, ['item', 'item', 'item', 'item']),
//     new Client(4, 'some name', 'some surname', 'some email', 3801111, ['item', 'item', 'item']),
//     new Client(8, 'some name', 'some surname', 'some email', 3801111, ['item']),
//     new Client(5, 'some name', 'some surname', 'some email', 3801111, ['item', 'item', 'item', 'item', 'item']),
//     new Client(7, 'some name', 'some surname', 'some email', 3801111, ['item', 'item']),
//     new Client(10, 'some name', 'some surname', 'some email', 3801111, ['item', 'item', 'item']),
//     new Client(2, 'some name', 'some surname', 'some email', 3801111, ['item', 'item', 'item', 'item']),
//     new Client(6, 'some name', 'some surname', 'some email', 3801111, ['item', 'item'])
// ]
// console.log(clientArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// clientArray.sort((a,b) => a.oder.length - b.oder.length);
// console.log(clientArray);
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let nameFn = (symbolName) => {
//     return symbolName
//         .replace('..', ' ')
//         .replace('---', ' ')
//         .replace('__', ' ')
// }
// console.log(nameFn('Ron---Whisley'))
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let numberArray = (array, limit) => {
//     let number = [];
//     for (let i = 0; i < array; i++) {
//         number.push(Math.round(Math.random() * limit));
//     }
//     return number;
// }
// let result = numberArray(10, 100)
// console.log(result);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// let newArray = numberArray(15, 1000); //генерую масив за допомогою попередньої функції
// newArray.sort((a, b) => a - b);
// console.log(newArray);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let filterArray = numberArray(10, 10); //генерую масив за допомогою попередньої функції
// let newFilterArray = filterArray.filter(value => value % 2 === 0);
// console.log(newFilterArray);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let newArray = numberArray(10, 10); //генерую масив за допомогою попередньої функції
// let map = newArray.map(value => value.toString());
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let nums = [11, 21, 3];
//
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return array.sort((a, b) => b - a);
//     }
//     return [];
// }
// console.log(sortNums(nums, 'ascending' ));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let newArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(newArray);


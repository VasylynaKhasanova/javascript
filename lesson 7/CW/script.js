//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         for (let element in this) {
//             if (typeof this[element] !== `function`) {
//                 console.log(`${[element]} - ${this[element]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver ;
//     }
// }
//
// let car = new Car('VolvoV50', 'VolvoCars', 2021, 250, 3.0);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2019);
// car.addDriver('Name');
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         }
//         info () {
//             for (let element in this) {
//                 if (typeof this[element] !== `function`) {
//                     console.log(`${[element]} - ${this[element]}`);
//                 }
//             }
//         }
//         increaseMaxSpeed (newSpeed) {
//             this.maxSpeed += newSpeed;
//         }
//         changeYear (newValue) {
//             this.year = newValue;
//         }
//         addDriver (driver) {
//             this.driver = driver;
//         }
//     }

// let car = new Car('VolvoV50', 'VolvoCars', 2021, 250, 3.0);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2019);
// car.addDriver('Name');
// console.log(car);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

    let arrayCinderellas = [
        new Cinderella('Olya', 25,38),
        new Cinderella('Katya',46,40),
        new Cinderella('Nastya',20,37),
        new Cinderella('Mary',34,39),
        new Cinderella('Tanya', 27, 41),
        new Cinderella('Polina', 50, 38),
        new Cinderella('Julia', 28, 36),
        new Cinderella('Nina', 36, 37),
        new Cinderella('Lida', 24,40),
        new Cinderella('Marta', 22, 36)
    ];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let newPrince = new Prince('The Little Prince', 16, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let fate = (arrayCinderellas, newPrince) => {
//     for (const variant of arrayCinderellas) {
//         if (variant.footSize === newPrince.shoe) {
//             return variant.name;
//         }
//     }
// }
// console.log(fate(arrayCinderellas, newPrince));

// ------------------------------------------------------

// let findPrincess = arrayCinderellas.find((variant) => variant.footSize === newPrince.shoe);
// console.log(findPrincess.name);
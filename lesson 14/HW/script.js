// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// Promise

// function awakening(alarmClock) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (alarmClock) {
//                     resolve('8:00 - I wake up');
//                 }
//                 reject('I want sleep more');
//             }, 5000)
//         }
//     )
// }
//
// function selfCare() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('8:30 - I brush my teeth');
//         }, 100)
//     })
// }
//
// function yoga(doYoga) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (doYoga) {
//                 resolve('9:00 - I do yoga');
//             }
//             reject('I want to eat');
//         }, 2000)
//     }))
// }
//
// function breakfast(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 resolve('10:00 - I eat my breakfast');
//             }
//             reject('I am not hungry');
//         }, 300)
//     })
// }
//
// function work () {
//     return new Promise(((resolve) => {
//         setTimeout(() => {
//                 resolve('11:00 - I start working');
//         }, 3000)
//     }))
// }
//
// function dinnerOut(visitRestaurant) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (visitRestaurant) {
//                 resolve('18:00 - I have a meal at some restaurant');
//             }
//             reject('I oder takeaway food');
//         }, 500)
//     })
// }
//
// function studying(timeForOkten) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (timeForOkten) {
//                 resolve('20:00 - I study with Okten');
//             }
//             reject('It is weekend');
//         }, 2000)
//     })
// }
//
// function sleeping(goSleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (goSleep) {
//                 resolve('00:00 - I go to bed');
//             }
//             reject('I do not want to sleep');
//         }, 500)
//     })
// }
//
// awakening(true)
//     .then(newDay => {
//         console.log(newDay);
//
//         return selfCare()
//     })
//     .then(washing => {
//         console.log(washing);
//
//         return yoga(true)
//     })
//     .then(sport => {
//         console.log(sport);
//
//         return breakfast(true)
//     })
//     .then(cooking => {
//         console.log(cooking);
//
//         return work()
//     })
//     .then(working => {
//         console.log(working);
//
//         return dinnerOut(true)
//     })
//     .then(chooseRestaurant => {
//         console.log(chooseRestaurant);
//
//         return studying(true)
//     })
//     .then(education => {
//         console.log(education);
//
//         return sleeping(true)
//     })
//     .then(theEndOfTheDay => {
//         console.log(theEndOfTheDay);
//     })
//     .catch(err => {
//         console.log('Something went wrong', err);
//     })

// Async await

// function awakening(alarmClock, sec) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (alarmClock) {
//                     resolve('8:00 - I wake up');
//                 }
//                 reject('I want sleep more');
//             }, sec * 1)
//         }
//     )
// }
//
// function selfCare(sec) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('8:30 - I brush my teeth');
//         }, sec * 1)
//     })
// }
//
// function yoga(doYoga, sec) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (doYoga) {
//                 resolve('9:00 - I do yoga');
//             }
//             reject('I want to eat');
//         }, sec * 1)
//     }))
// }
//
// function breakfast(food, sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 resolve('10:00 - I eat my breakfast');
//             }
//             reject('I am not hungry');
//         }, sec * 1)
//     })
// }
//
// function work(sec) {
//     return new Promise(((resolve) => {
//         setTimeout(() => {
//             resolve('11:00 - I start working');
//         }, sec * 1)
//     }))
// }
//
// function dinnerOut(visitRestaurant, sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (visitRestaurant) {
//                 resolve('18:00 - I have a meal at some restaurant');
//             }
//             reject('I oder takeaway food');
//         }, sec * 1)
//     })
// }
//
// function studying(timeForOkten, sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (timeForOkten) {
//                 resolve('20:00 - I study with Okten');
//             }
//             reject('It is weekend');
//         }, sec * 1)
//     })
// }
//
// function sleeping(goSleep, sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (goSleep) {
//                 resolve('00:00 - I go to bed');
//             }
//             reject('I do not want to sleep');
//         }, sec * 1)
//     })
// }
//
// async function dailyRoutine() {
//     try {
//         const newDay = await awakening(true, 100);
//         console.log(newDay);
//
//         const washing = await selfCare(2000);
//         console.log(washing);
//
//         const sport = await yoga(true, 500);
//         console.log(sport);
//
//         const food = await breakfast(true, 1000);
//         console.log(food);
//
//         const working = await work(3000);
//         console.log(working);
//
//         const chooseRestaurant = await dinnerOut(true, 500);
//         console.log(chooseRestaurant);
//
//         const education = await studying(true, 400);
//         console.log(education);
//
//         const theEndOfTheDay = await sleeping(true, 1000);
//         console.log(theEndOfTheDay)
//
//     } catch (err) {
//         console.error('Something went wrong', err)
//     }
// }
//
// dailyRoutine()

// Callback

// function awakening(alarmClock, callback) {
//     setTimeout(() => {
//         if (alarmClock) {
//             callback(null, '8:00 - I wake up');
//             return;
//         }
//         callback('I want sleep more');
//     }, 5000)
// }
//
// function selfCare(callback) {
//     setTimeout(() => {
//         callback(null, '8:30 - I brush my teeth');
//     }, 100)
// }
//
// function yoga(doYoga, callback) {
//     setTimeout(() => {
//         if (doYoga) {
//             callback(null, '9:00 - I do yoga');
//             return;
//         }
//         callback('I want to eat');
//     }, 2000)
// }
//
// function breakfast(food, callback) {
//     setTimeout(() => {
//         if (food) {
//             callback(null, '10:00 - I eat my breakfast');
//             return;
//         }
//         callback('I am not hungry');
//     }, 300)
// }
//
// function work(callback) {
//     setTimeout(() => {
//         callback(null, '11:00 - I start working');
//     }, 3000)
// }
//
// function dinnerOut(visitRestaurant, callback) {
//     setTimeout(() => {
//         if (visitRestaurant) {
//             callback(null, '18:00 - I have a meal at some restaurant');
//             return;
//         }
//         callback('I oder takeaway food');
//     }, 500)
// }
//
// function studying(timeForOkten, callback) {
//     setTimeout(() => {
//         if (timeForOkten) {
//             callback(null, '20:00 - I study with Okten');
//             return;
//         }
//         callback('It is weekend');
//     }, 2000)
// }
//
// function sleeping(goSleep, callback) {
//     setTimeout(() => {
//         if (goSleep) {
//             callback(null, '00:00 - I go to bed');
//             return;
//         }
//         callback('I do not want to sleep');
//     }, 500)
// }
//
// awakening(true, (err, newDay) => {
//     if (err) {
//         console.error('Something went wrong', err)
//     } else {
//         console.log(newDay)
//
//         selfCare((err, washing) => {
//             if (err) {
//                 console.error('Something went wrong', err)
//             } else {
//                 console.log(washing)
//
//                 yoga(true, (err, sport) => {
//                     if (err) {
//                         console.error('Something went wrong', err)
//                     } else {
//                         console.log(sport)
//
//                         breakfast(true, (err, food) => {
//                             if (err) {
//                                 console.error('Something went wrong', err)
//                             } else {
//                                 console.log(food)
//
//                                 work((err, working) => {
//                                     if (err) {
//                                         console.error('Something went wrong', err)
//                                     } else {
//                                         console.log(working)
//
//                                         dinnerOut(true, (err, chooseRestaurant) => {
//                                             if (err) {
//                                                 console.error('Something went wrong', err)
//                                             } else {
//                                                 console.log(chooseRestaurant)
//
//                                                 studying(true, (err, education) => {
//                                                     if (err) {
//                                                         console.error('Something went wrong', err)
//                                                     } else {
//                                                         console.log(education)
//
//                                                         sleeping(true, (err, theEndOfTheDay) => {
//                                                             if (err) {
//                                                                 console.error('Something went wrong', err)
//                                                                 return;
//                                                             }
//                                                             console.log(theEndOfTheDay)
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })


// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let name = document.getElementById('name')
// let age = document.getElementById('age')
// let button = document.getElementById('btn');
//
// let submit = (userName, userAge) => {
//     let object = {userName, userAge};
//     localStorage.setItem('User', JSON.stringify(object))
// }
//
// button.onclick = function () {
//     submit(name.value, age.value);
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let model = document.getElementById('model');
// let type = document.getElementById('type');
// let volume = document.getElementById('volume');
// let button = document.getElementById('submit');
//
// let submit = function (userModel, userType, userVolume) {
//     let array = [{userModel, userType, userVolume}];
//     localStorage.setItem('User car', JSON.stringify(array));
// }
// button.onclick = function () {
//     submit(model.value, type.value, volume.value);
// }
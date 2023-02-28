// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const square = (a, b) => a * b;
// console.log(square(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const piRPow = (r) => Math.PI * r ** 2;
// console.log(piRPow(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const cilinSq = (r, h, pi = 3.14) => (((2 * pi * r * h) + (2 * pi * (r * r))));
// console.log(cilinSq(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
// const arrPrinter = (arr) => {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// arrPrinter([112, 223, 443, 554]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const paragCreat = (text) => document.write(`<p>${text}</p>`);
// paragCreat('hey cool exrecise');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const liCreat=(txt)=>{
//     document.write(`<ul>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`</ul>`);
// }
// liCreat('bom bom bom');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const liCreat=(txt,count)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// liCreat('bom bom bom',15);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const liCreat=(arr)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// liCreat(['bom bom bom',15, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const arrnn = [
//     {id: 1, name: 'Nazar', age: 18},
//     {id: 2, name: 'Mariya', age: 20},
//     {id: 3, name: 'Artem', age: 25},
// ]
//
//
// const objblockcreat = (object) => {
//     for (const item of object) {
//         document.write(`<hr\>`)
//         document.write(`<div>id:${item.id}<br\> name:${item.name}<br\> age:${item.age}<br\></div>`)
//         document.write(`<hr\>`)
//     }
// }
// objblockcreat(arrnn);

// - створити функцію яка повертає найменьше число з масиву
// const min = (arr) => {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (result > arr[i]) {
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(min([123, -52, 1, 45, 65]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// const sum=(arr)=>{
//     let basket = 0;
//     for (const number of arr) {
//         basket+=number;
//     }
//     return basket;
// }
// console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// const swap=(arr,index1,index2)=>{
//     let v1=arr[index1];
//     let v2=arr[index2];
//     arr[index1]=v2;
//     arr[index2]=v1;
//     return arr;
// }
// console.log(swap([11, 22, 33, 44, 55], 0, 4));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency)=>{
    for (const item of currencyValues) {
        if(item.currency === exchangeCurrency){
            return sumUAH/item.value;
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

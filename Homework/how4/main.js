// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}
console.log(square(10, 20));
console.log(square(20, 30));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function piRPow(r) {
    // console.log(3.14 * r * r)
    return 3.14 * r * r;
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilinderSquare(r, h) {
    let pi = 3.14;
    return (((2 * pi * r * h) + (2 * pi * (r * r))));
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayPrinter(arr) {
    for (let item of arr) {
        console.log(item);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумteент
function paragraphCreator(text) {
    document.write(`<p>${text}</p>`);
}
// paragraphCreator('hi');
// paragraphCreator('123452');
// paragraphCreator(674352);
// paragraphCreator(flase);
//paragraphCreator(plusplus);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function liCreator(txt) {
    document.write(`<ul>`);
    document.write(`<li>${txt}</li>`)
    document.write(`<li>${txt}</li>`)
    document.write(`<li>${txt}</li>`)
    document.write(`</ul>`);
}

// - створити функцію яка створює ul з li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liCreator2(text, counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
function listCreator(arr) {
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

listCreator([1, 2, 'parapam', 'blebbleb', true, 'lala', '234']);

// - створити функцію яка приймає масив об'єктів
// з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function objBlockCreator(objects) {
    for (const item of objects) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
}

// - створити функцію яка повертає найменьше число з масиву
function minNum(numbers){
    let min = numbers[0];
    for (const number of numbers) {
        if(min<numbers){
            min=numbers
        }
    }
    return min;
}
minNum([-11,-22,-33]);

// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(numbers) {
    let basket = 0;
    for (const number of numbers) {
        basket += number;
    }
    return basket;
}


// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let v1 = arr[index1];
    let v2 = arr[index2];
    arr[index1] = v2;
    arr[index2] = v1;
    return arr;
}

console.log(swap([11, 22, 33, 44, 55], 0, 4));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(uah, currencies, exitCurrency) {
    for (const item of currencies) {
        if (item.currency === exitCurrency) {
            return uah / item.value;
        }
    }

}

console.log(exchange(
    10000,
    [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42},
        {currency: 'GBP', value: 43}
    ],
    'USD'
));
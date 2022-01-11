//  Создайте две переменные a и b. Выведите в консоль результ их умножения.

const a = 5;
const b = 50;
console.log(a * b);

// Создайте две переменные c и d. Выведите в консоль результат деления.

const c = 50;
const d = 5;
console.log(c / d);

//  Создайте две переменные e и f. Выведите в консоль результат сложения.

const e = 30;
const f = 20;
console.log(e + f);

// Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

const numberValue1 = 11;
const numberValue2 = true;
const numberValue3 = "javascript";
const numberValue4 = "100";
console.log(typeof numberValue1);
console.log(typeof numberValue2);
console.log(typeof numberValue3);
console.log(typeof numberValue4);

// Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num = ++num;
num = --num;

// Таски на prompt (вводить с помощью prompt, выводить с помощью alert):

// 1) Запросить число у пользователя, возвести его в квадрат и вывести результат.

//const userNumber = prompt("Input number:");
//alert(userNumber ** 2);

// 2) Вывести среднее арифметическое двух чисел. Числа запрашивать у пользователя.

// const userValue1 = Number(prompt("Input first number"));
// const userValue2 = Number(prompt("Input second number"));
// alert((userValue1 + userValue2) / 2);

// 3) Перевести число минут в секунды и вывести результат. Число минут запрашивать у пользователя.

//const minutesNumber = Number(prompt("Number of minutes:"));
//alert(minutesNumber * 60);

// 4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. Выведите сообщение с приветствием, например, 'Hello, Vasya!'.

//const greeting = "Hello,";
//let userName = prompt("What is your name?");
//alert(greeting + userName);

// Таски на условия:

// 1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

//const userNum = Number(prompt("Enter correct number:"));

//if (userNum === 10) {
//  alert("Верно");
//} else {
//  alert("Неверно");
//}

// 2) Напишите две проверки.
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// Проверьте работу скрипта при test, равном true, false.

const testValue = true;

if (testValue === true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

if (testValue !== true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

const amoutPurchase = Number(prompt("Enter purchase amount: "));

if (amoutPurchase > 500 && amoutPurchase < 800) {
  alert(amoutPurchase / 1.03);
} else if (amoutPurchase > 800) {
  alert(amoutPurchase / 1.05);
}

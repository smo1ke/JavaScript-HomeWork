//  Создайте две переменные a и b. Выведите в консоль результ их умножения.

// const a = 5;
// const b = 50;
// console.log(a * b);

// Создайте две переменные c и d. Выведите в консоль результат деления.

// const c = 50;
// const d = 5;
// console.log(c / d);

//  Создайте две переменные e и f. Выведите в консоль результат сложения.

// const e = 30;
// const f = 20;
// console.log(e + f);

// Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

// const numberValue1 = 11;
// const numberValue2 = true;
// const numberValue3 = "javascript";
// const numberValue4 = "100";
// console.log(typeof numberValue1);
// console.log(typeof numberValue2);
// console.log(typeof numberValue3);
// console.log(typeof numberValue4);

// // Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
// let num = 1;
// num += 11;
// num -= 11;
// num *= 11;
// num /= 11;
// num = ++num;
// num = --num;

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

// const testValue = true;

// if (testValue === true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// if (testValue !== true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

//  3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

// const amoutPurchase = Number(prompt("Enter purchase amount: "));

// if (amoutPurchase > 500 && amoutPurchase < 800) {
//   alert(amoutPurchase / 1.03);
// } else if (amoutPurchase > 800) {
//   alert(amoutPurchase / 1.05);
// }

// Таски на циклы.
// Каждую задачу решить циклами while, for.

// 1) Вывод чисел от 25 до 0 (порядок уменьшения).

// let i = 25;

// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// 2) Вывод чисел от 10 до 50, которые кратны 5.

// let currentStep = 10;
// const stepCount = 50;

// while (currentStep <= stepCount) {
//   if (currentStep % 5 === 0) {
//     console.log(currentStep);
//   }
//   currentStep++;
// }

//  3) Найти сумму чисел в пределах от 1 до 100.

// let sumOfNumbers = 0;

// for (let r = 1; r <= 100; ++r) {
//   sumOfNumbers = sumOfNumbers + r;
//   console.log("sum of numbers:", sumOfNumbers);
// }

// Таски на switch..case.

// 1) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default).

// let userValue = Number(prompt("Введите порядковый номер для недели:"));

// switch (userValue) {
//   case 1:
//     alert("Понедельник");
//     break;
//   case 2:
//     alert("Вторник");
//     break;
//   case 3:
//     alert("Среда");
//     break;
//   case 4:
//     alert("Четверг");
//     break;
//   case 5:
//     alert("Пятница");
//     break;
//   case 6:
//     alert("Суббота");
//     break;
//   case 7:
//     alert("Воскресенье");
//     break;
//   default:
//     alert("Неверный порядковый номер");
// }

// 2) В переменной day лежит какое-то число из интервала от 1 до 31. Определите, в какую декаду месяца попадает это число (в первую, вторую или третью).

// let dayValue = 23;
// switch (dayValue) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log("Первая декада месяца!");
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//   case 19:
//   case 20:
//     console.log("Вторая декада месяца!");
//     break;
//   case 21:
//   case 22:
//   case 23:
//   case 24:
//   case 25:
//   case 26:
//   case 27:
//   case 28:
//   case 29:
//   case 30:
//   case 31:
//     console.log("Третья декада месяца!");
//     break;
// }

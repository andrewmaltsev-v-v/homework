// Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.


let num = 10;
let factorial = 1;

for (let i = 1; i < num; i++) {
    factorial *= i;
}

console.log (factorial);
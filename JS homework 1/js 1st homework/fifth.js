/*Переменная хранит процент кредита, вторая переменная хранит объем тела кредита, третья переменная хранит длительность кредитного договора в годах.
Написать скрипт который вычислит:
Сколько процентов заплатит клиент за все время
Сколько процентов заплатит клиент за один календарный год
Какое общее количество денежных средств клиента банка выплатит за все года*/



let credit = 50000;
let percentAll;
let months = 24;
let percentSt = 5; // stavka


percentAll = credit * ( percentSt / 100) * ( months / 12 );
console.log ( percentAll );

let percentYear = credit * ( percentSt / 100) * ( 12 / 12 );
console.log ( percentYear );

let totalSum = credit + percentAll;
console.log ( totalSum );

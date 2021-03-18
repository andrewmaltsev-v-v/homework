Переменная хранит в себе значение от 0 до 9.
Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. 
Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами.

2nd

"use strict";

let number = prompt ("vvedite chislo ot 0 do 9", "");

let showNum = ( number == 0 ) ? console.log ('0') :
             ( number == 1 ) ? console.log ('1') :
             ( number == 2 ) ? console.log ('2') :
             ( number == 3 ) ? console.log ('3') :
             ( number == 4 ) ? console.log ('4') :
             ( number == 5 ) ? console.log ('5') :
             ( number == 6 ) ? console.log ('6') :
             ( number == 7 ) ? console.log ('7') :
             ( number == 8 ) ? console.log ('8') :
             ( number == 9 ) ? console.log ('9') :
             console.log ( " another number ");


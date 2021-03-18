/*Переменная хранит в себе значение от 0 до 9.
Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. 
Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами.

2nd*/

"use strict";

let number = prompt ("vvedite chislo ot 0 do 9", "");

let showNum = ( number == 0 ) ? console.log ('zero') :
             ( number == 1 ) ? console.log ('one') :
             ( number == 2 ) ? console.log ('two') :
             ( number == 3 ) ? console.log ('three') :
             ( number == 4 ) ? console.log ('four') :
             ( number == 5 ) ? console.log ('five') :
             ( number == 6 ) ? console.log ('six') :
             ( number == 7 ) ? console.log ('seven') :
             ( number == 8 ) ? console.log ('eight') :
             ( number == 9 ) ? console.log ('nine') :
             console.log ( " another number ");


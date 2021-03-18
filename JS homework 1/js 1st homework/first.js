/*Переменная хранит в себе значение от 0 до 9.
Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. 
Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами.*/

1st

"use strict";

let number = prompt ('vvdeite chislo ot 0 do 9', '');

if (number == 1) {
    console.log  ('odin');
} else if ( number == 2 ) {
    console.log  ('dva');
} else if ( number == 3 ) {
    console.log  ('3');
} else if ( number == 4 ) {
    console.log  ('4');
} else if ( number == 5 ) {
    console.log  ('5');
} else if ( number == 6 ) {
    console.log  ('6');
} else if ( number == 7 ) {
    console.log  ('7');
} else if ( number == 8) {
    console.log  ('8');
} else if ( number == 9) {
    console.log  ('9');
} else {
    console.log  (' another number ');
}

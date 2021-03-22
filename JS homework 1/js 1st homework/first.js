/*Переменная хранит в себе значение от 0 до 9.
Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. 
Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами.*/


let number = prompt ('vvdeite chislo ot 0 do 9', '');

if (number == 1) {
    console.log  ('one');
} else if ( number == 2 ) {
    console.log  ('two');
} else if ( number == 3 ) {
    console.log  ('three');
} else if ( number == 4 ) {
    console.log  ('four');
} else if ( number == 5 ) {
    console.log  ('five');
} else if ( number == 6 ) {
    console.log  ('six');
} else if ( number == 7 ) {
    console.log  ('seven');
} else if ( number == 8) {
    console.log  ('eight');
} else if ( number == 9) {
    console.log  ('nine');
} else {
    console.log  (' another number ');
}

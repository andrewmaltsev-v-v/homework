/*Переменная хранит в себе единицу измерения одно из возможных значений (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число.
В зависимости от того какая единица измерения написать скрипт, который выводит количество байт. 
Для вычисления принимает счет что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения.*/



const BYTE = 8;
const KB = 1024;
const MB = 1024 * KB;
const GB = 1024 * MB;

let size = 10;
let unity = "MB";

if ( unity == "BYTE" ) {
    console.log (size * BYTE);
} else if ( unity == "KB" ) {
    console.log (size * KB);
} else if ( unity == "MB" ) {
    console.log (size * MB);
} else if ( unity == "GB" ) {
    console.log (size * GB);
};

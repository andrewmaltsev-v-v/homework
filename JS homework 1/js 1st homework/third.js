./Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том, что число является нулевым либо положительным либо отрицательным.

"use strict";

let number = -23;

if ( number > 0) {
    console.log ( " plus " );
} else if ( number < 0 ) {
    console.log ( " minus " );
} else {
    console.log ( " null " );
}

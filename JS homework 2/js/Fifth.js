// Найти минимальное число которое больше 300 и нацело делиться на 17

let minNum = Infinity;

for ( let i = 300; i <= minNum; i++ ) {
    if ( i % 17 == 0 ) {
        console.log (i);
        break;
    }
}
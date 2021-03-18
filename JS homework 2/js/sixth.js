// Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа.

let x = 60;
let y = 45;
let max;
let arrDiv = [];
let arrMax = 0;

if ( x > y ) {
    max = x;
} else {
    max = y;
}

for ( let i = 1; i < max; i++ ) {
    
    if ( x % i == 0 && y % i == 0 ) {
        arr.push(i);
    }
}

for ( i = 0; i <= arrMax; i++ ) {
	if ( arrDiv[i] > arrMax ) {
		arrMax = arrDiv [i];
	}
}

console.log (arrMax);

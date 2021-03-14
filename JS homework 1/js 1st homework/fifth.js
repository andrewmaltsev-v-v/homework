
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
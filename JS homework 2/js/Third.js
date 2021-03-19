/*Дано число - вывести первые N делителей этого числа нацело.*/


let num = 14;
let arrNum = [];
let divNum = 1;

for (let i = 1; i <= num; i++ ) {

    if ( num % i == 0) {
        arrNum.push (i);
    }
}

for (let i = 0; i <= divNum; i++) {
    console.log (arrNum[i]);
}

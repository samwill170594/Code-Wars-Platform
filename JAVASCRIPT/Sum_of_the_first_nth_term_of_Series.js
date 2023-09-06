// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n)
{
    return sum(n).toFixed(2).toString();
}

function sum(n){

    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 1 + 1/4;
    else return 1/(1 + 3*(n-1)) + sum(n-1);
}

console.log(SeriesSum(4));
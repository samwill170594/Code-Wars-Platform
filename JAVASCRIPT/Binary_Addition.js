// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a,b) {
let sum = a + b;
let result = [];

let quotient;
while(quotient != 0){
    let current = sum;
    quotient = Math.floor(current / 2);
    let remain = current % 2;
    result.push(remain);
    sum = quotient;
}

return result.reverse().join("");

}

console.log(addBinary(5,9));
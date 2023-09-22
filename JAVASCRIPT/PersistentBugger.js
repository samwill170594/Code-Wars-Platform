// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
    if(num < 10) return 0;
    let processedNum = getProductOfDigits(num);
    let counter = 0;
    while(getNumberOfDigits(processedNum) > 1){
        counter++;
        processedNum = getProductOfDigits(processedNum);
    }
    
    return ++counter;
    
 }

 function getProductOfDigits(number){
    let digits = number.toString().split('').map(item => parseInt(item));

    return digits.reduce((previous, current) => previous * current);
 }

 function getNumberOfDigits(number){
    return number.toString().split('').length;
 }

 console.log(persistence(4))
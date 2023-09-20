// https://www.codewars.com/kata/56b7251b81290caf76000978/train/javascript
function getLastDigit(index) {
    return Fibonacci(index) % 10;
}

function Fibonacci(index){

    if(index === 1 || index === 2) return 1;
    else return Fibonacci(index -1) + Fibonacci(index - 2);
}

console.log(getLastDigit(15));
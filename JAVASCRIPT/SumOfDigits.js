// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
    let sum = getSum(getDigits(n));
    while(isGreaterThan10(sum))
    sum = getSum(getDigits(sum));

    return sum;
  }

  function getDigits(n){
    return n.toString().split('').map(item => parseInt(item));
  }

  function getSum(array){
    return array.reduce((previous, current) => previous+current);
  }

  function isGreaterThan10(number){
    return number >= 10;
  }

  console.log(digitalRoot(456))
// https://www.codewars.com/kata/56aed5db9d5cb55de000001c/train/javascript

function twoCount(n) {
    let counter = 0;
    let number = n;
    while(number % 2 === 0){
        counter++;
        number /= 2;
    }

    return counter;
  }

  console.log(twoCount(24))
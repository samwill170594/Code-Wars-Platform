// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/python

function noBoringZeros(n) {
    if(n===0) return 0;
    let reversedNumber = n.toString().split("").reverse();
    do{
        if(reversedNumber[0] === "0") reversedNumber.shift();

    } while(reversedNumber[0] === "0");

    return parseInt(reversedNumber.reverse().join(""));
  }

  console.log(noBoringZeros(-145000000))
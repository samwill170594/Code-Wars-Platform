// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
    let Digits = getDigits(num);
    let expandedResult = "";

    for(let index = Digits.length - 1; index >= 0 ; index--)
        if(Digits[index] !== 0) expandedResult += " + "+String(Digits[index] * (10 ** index));
        
    return expandedResult.slice(3);
  }


  function getDigits(num){
    let stringDigits = String(num).split("");

    // reverse the array
    stringDigits = stringDigits.reverse();
    let Digits = [];

    stringDigits.forEach((digit) => {
        Digits.push(Number(digit));
    });

    return Digits;
  }


console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(9000));
//expandedForm(42);
//expandedForm(70304);


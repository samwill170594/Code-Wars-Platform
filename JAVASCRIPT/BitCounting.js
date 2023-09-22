// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function(n) {
    return n.toString(2).split("").filter(item => item === '1').length;
  };

  console.log(countBits(7))
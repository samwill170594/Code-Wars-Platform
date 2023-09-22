// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let realNumbers = numbers.split(" ").map(item => parseInt(item));
    return `${realNumbers.reduce((previous, current) => (previous > current) ? previous : current)} ${realNumbers.reduce((previous, current) => (previous < current) ? previous : current)}`;
  }


  console.log(highAndLow("1 2 3 4 5"))
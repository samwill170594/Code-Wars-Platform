// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let vowels = "aeiou";
    return str.split("").reduce((previous, current) => vowels.includes(current) ? previous+1 : previous,0);
  }

  console.log(getCount("abracadabra"));
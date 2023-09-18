// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

function roundToNext5(n){
    return n % 5 === 0 ? n : (Math.abs(n) === n) ? (Math.trunc(n/5)+1) * 5 : Math.trunc(n/5) * 5;
  }
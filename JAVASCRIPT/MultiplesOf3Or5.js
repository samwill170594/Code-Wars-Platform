// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
  if(number <=2) return 0;
  let numbers = Array.from(Array(number).keys(), item => item+1);
  numbers.pop();
  let sum = 0;
  for(let num of numbers)
  { 
    if(num % 3 === 0 || num % 5 === 0)
        sum += num;
  }
    

    return sum;

}

console.log(solution(10));
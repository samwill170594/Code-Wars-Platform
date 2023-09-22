// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  
    return arr.filter(item => item > 0).reduce((previous, current) => previous + current,0);
}

console.log(positiveSum([1,2,3,4,5]))
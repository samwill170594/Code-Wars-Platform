//https://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript


function removeNb (n) {
    const arr = [...Array(n + 1).keys()]
  const acc = n*(n+1)/2;
  return Array.prototype.concat.apply([], arr.map(i => arr.map(x => [i,x]))) .filter(([a,b])=>  a * b == acc - a - b )
}

function sum(array){
    return array.reduce((a,b) => a+b,0);
}


function sumWithExclusion(array, number1, number2){
    let sum = 0;
    for(let item of array){
        if(item !== number1 && item !== number2) sum += item;
    }

    return sum;

}


//let result = removeNb(100000);

console.log(...Array(10).keys());

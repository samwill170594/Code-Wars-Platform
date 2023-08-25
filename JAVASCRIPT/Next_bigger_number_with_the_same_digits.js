// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

function nextBigger(n){
    console.time();
    let digits = String(n).split("");
    let permutations = generatePermutation(digits);
    let number_permutations = permutations.map((item) => Number(item));
    let index = number_permutations.indexOf(n);

    while(index < number_permutations.length){
      if(number_permutations[index] !== n) return number_permutations[index];
      else index++;
    }

    if(index === number_permutations.length) return -1;

    console.timeEnd();
  }


  function generatePermutation (arr)
  {
     let resultArr = [];
     if(arr.length === 0) return [];
     if(arr.length ===1) return [arr];
     
     for(let i =0 ; i<arr.length ; i++)
     {
       const currentElement = arr[i];
       const otherElements = arr.slice(0,i).concat(arr.slice(i+1));
       const swappedPermutation = generatePermutation(otherElements);
       
       for(let j =0 ; j < swappedPermutation.length ; j++)
       {
         const finalSwappedPermutation = 
         [currentElement].concat(swappedPermutation[j]);
         resultArr.push(finalSwappedPermutation.join(""));
       }
     }

     return resultArr.sort();

  }

  console.log(nextBigger(1234567890));
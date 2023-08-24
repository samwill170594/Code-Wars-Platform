//https://www.codewars.com/kata/58ad317d1541651a740000c5/train/javascript

/*
Task
You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

Example
For s = "abc", the result should be "bac".

 The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".

Input/Output

*/

function middlePermutation(s) {
  let permutations = generatePermutation(s.split(""));
  console.log(permutations);
  let index = permutations.length % 2 == 0 ? (permutations.length / 2) - 1 : Math.floor(permutations.length / 2);
  console.log(index);
  return permutations[index];
  
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
   
   return resultArr.sort((a,b) => a < b);
}


console.log(middlePermutation("abcdxg"));
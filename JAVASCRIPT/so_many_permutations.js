// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

function permutations(string) {
    let arr = generatePermutation(string.split(""));
    if(arr.length === 1) return arr[0];
	else return arr.filter((item, index) => arr.indexOf(item) === index);
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

console.log(permutations('aabb'))
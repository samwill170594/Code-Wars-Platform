// challenge
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

//Easy case is when the list is made up of only positive numbers
//and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, 
//return 0 instead.

var maxSequence = function(arr){
    if(arr.length == 0){ 
        return 0;
    }
    
    else{
    
    // check if all items of array are negative number
    let negative_numbers = arr.filter(element => element < 0).length;
    if(arr.length === negative_numbers){
        return 0;
    }
    else {
        let results = [];
    let compteur = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            
            results[compteur] = ExtractSubArray(arr,i,j);
            compteur++;
        }
        
    }


    let max = results[0];
    for(let i = 0; i < results.length; i++){
        if(results[i] > max){
            max = results[i];
        }
    }

 
    return max;
    }
    
    
    }
    
  }


  function ExtractSubArray(arr,indexStart, indexEnd){

    let subArray;
    if(indexEnd === indexStart){
        subArray = [arr[indexStart]];
    }
    else{
        subArray =  arr.slice(indexStart,indexEnd+1)
    }
    

    
    let sum = 0;
    for(let i = 0; i < subArray.length; i++){
        sum += subArray[i];
    }

    return sum;

  }

  console.log(maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4]))



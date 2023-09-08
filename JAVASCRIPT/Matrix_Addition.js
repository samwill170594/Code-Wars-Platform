// https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript

function matrixAddition(a, b){
    
    let result = [];
    for(let i = 0; i < a.length; i++){
        let currentItem = a[i];
        let row = [];
        for(let j = 0; j < currentItem.length;j++){
            row.push(currentItem[j]+b[i][j]);
            result[i] = row;
        }
    }
    return result;
  }

  console.log(matrixAddition([ [1, 2],
    [1, 2] ], [ [2, 3],
    [2, 3] ] ))
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    
    let Values = A.map(item => A.reduce((previous, current) => (current === item) ? previous+1 : previous,0)).map(item => (item % 2 === 0)?false:true);
    indexValues = Values.map((item, index) => item ? index : "None");
    for(let item of indexValues){
        if(typeof item === "number") return A[item]
    }
  }



  console.log(findOdd([7,7,8]));
// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014


function shiftedDiff(first,second){
    if(first.length === second.length){

        for(let i = 0; i < first.length;i++){
            let result = shiftString(first,i);
            if(result === second) return i;
        }
        return -1;
    }
    else return -1;
  }

  function shiftString(string, shift){
    let stringArr = string.split("");
    let result = [];
    stringArr.forEach((character,index) => {

        let new_index = (index + shift) % string.length;
        result[new_index] = character;
        
    });

    return result.join("");

    
  }

  console.log(shiftedDiff("moose", "Moose"));
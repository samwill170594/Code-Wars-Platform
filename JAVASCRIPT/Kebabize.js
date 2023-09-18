// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

function kebabize(str) {
    let indexesOfUpperCharacters = [];
    let new_str = "";

    str.split("").forEach((value,index) =>{
        if(value === value.toUpperCase()) indexesOfUpperCharacters.push(index);
    });
    console.log(indexesOfUpperCharacters);
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])) continue
        if(!indexesOfUpperCharacters.includes(i)) new_str += str[i];
        else {
            if(i!==0) new_str += "-"+str[i].toLowerCase();
            else new_str += str[i].toLowerCase();
        } 
    }
    return new_str;
  }

  console.log(kebabize("MyCamelHas3Humps"))
// https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript

function charConcat(string){
    if(string.length % 2 === 1){
        let array_string = string.split("");
        array_string[(string.length - 1)/2] = "";
        string = array_string.join("");
    }
    
    let first_part = string.length % 2 === 1 ? string.split("").slice(0,(string.length + 1)/2) : string.split("").slice(0,string.length/2);
    let last_part = string.length % 2 === 1 ? string.split("").splice((string.length - 1)/2 + 1).reverse() : string.split("").splice(string.length/2).reverse();
    let result = "";
    let counter = 0;

    for(let i = 0; i < first_part.length;i++)     
        result += first_part[i]+last_part[i]+(++counter);

    return result;
  }

  console.log(charConcat("abc!def"));
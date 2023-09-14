// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript

function alphanumeric(string){
    let otherCharacters = ["Ä","Ö","Ü","ä","ö","ü","ß"];
    let characters = Array.from(Array(26).keys(), (i) => String.fromCharCode(i+65)).concat(
        Array.from(Array(26).keys(), (i) => String.fromCharCode(i+97))
    ).concat(Array.from(Array(10).keys(), i => i.toString())).concat(otherCharacters);

    if(string === "" || string.includes(" ") || string.includes("_")) return false;
    
    for( let character of string)
        if(!characters.join("").includes(character)) return false;

    return true;
  }

  console.log(alphanumeric("Mazinkaiser"))
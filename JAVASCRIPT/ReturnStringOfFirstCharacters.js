// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript

function makeString(s){
    return s.split(" ").map(item => item[0]).join("");
  }

  console.log(makeString("This Is A Test"))
  
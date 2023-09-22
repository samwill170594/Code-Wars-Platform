// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript


function spinWords(string){
    return string.split(" ").map(str => (str.length < 5) ? str : str.split("").reverse().join("")).join(" ");
  }

  console.log(spinWords("Welcome"))
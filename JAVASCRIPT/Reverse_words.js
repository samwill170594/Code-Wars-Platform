// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
    let tab_str = str.split(" ");
    result = [];

    for(let word of tab_str){
        result.push(word.split("").reverse().join(""));
    }

    return result.join(" ");
  }

  console.log(reverseWords("elbuod  secaps"))
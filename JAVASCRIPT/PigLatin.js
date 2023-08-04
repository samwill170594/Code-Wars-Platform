// challenge link : https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

/*
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(str){
    //Code here
    let tabStr = str.split(" ");
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
    let textToAdd = "ay";
    let result = [];

    for(item of tabStr){
        if(punctuation.includes(item)) result.push(item);
        else result.push(item.slice(1)+item.charAt(0)+textToAdd);
    }
    return result.join(" ");
  }


  console.log(pigIt('Pig latin is cool !'))

  
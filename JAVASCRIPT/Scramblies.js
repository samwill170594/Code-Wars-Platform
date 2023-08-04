//challenge link : https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

/*
Complete the function scramble(str1, str2) that returns true 
if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
*/


function scramble(str1, str2) {
    let numOfChars1 = numOfCharacters(str1);
    let numOfChars2 = numOfCharacters(str2);
    let result = true;

    for(item of numOfChars2){
        let characterFound = numOfChars1.filter((it) => it?.character === item?.character);
        let FirstCharacterFound = characterFound[0];
        if(characterFound[0]=== undefined) return false;
        else if(item?.Number > FirstCharacterFound?.Number) return false;
    }

   

    return result;
    
  }



  function numOfCharacters(str){
    let result = [];
    let IndexCounter = 0;
    for(let char of str){
        IndexCounter = str.split("").filter((c) => c === char).length;

        result.push(
            {
                Number : IndexCounter,
                character : char
            }
        );
    }

    return Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);
  }

  
  

  console.log(scramble("abcdefghijklmnopqrstuvwxyz".repeat(10_000), "zyxcba".repeat(9_000)));
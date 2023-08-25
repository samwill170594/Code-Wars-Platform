// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    let counting_characters = [];

    for(let char of s){
        let lower_current_character = char.toLowerCase();
        let count = s.toLowerCase().split("").filter(item => item === lower_current_character).length;

        if(!(char in counting_characters)){
            counting_characters.push(
                {
                    "Character" : char,
                    "Number" : count
                }
            )
        }
    }

    
    let result = counting_characters.filter((item) => item["Number"] === 1);
    return (result.length === 0 )? "" : result[0].Character;
  }

  console.log(firstNonRepeatingLetter("stress"));
// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript

function presses(phrase) {
    let counter = 0;
    let upper_phrase = phrase.toUpperCase();
    let taps = [
        {
            Value : 1,
            characters : "1ADGJMPTW*# "
        },
        {
            Value : 2,
            characters : "0BEHKNQUX"
        },
        {
            Value : 3,
            characters : "CFILORVY"
        },
        {
            Value : 4,
            characters : "234568SZ"
        },
        {
            Value : 5,
            characters : "79"
        }
    ];

    for(let character of upper_phrase){

        counter += taps.filter(item => item.characters.includes(character))[0].Value
    }
    return counter;
  }

  console.log(presses("LOL"));
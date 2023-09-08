// https://www.codewars.com/kata/59f7597716049833200001eb/train/javascript


function solve(x, y) {
    let counter = 0;

    for(let i = x; i < y; i++){
        counter = (i === rotate(i)) ? ++counter : counter;
    }

    return counter;
   }


   function rotate(number){

    let equivalents = [
        {
            "Value" : 0,
            "Rotate" : 0
        },
        {
            "Value" : 1,
            "Rotate" : 1
        },

        {
            "Value" : 6,
            "Rotate" : 9
        },
        {
            "Value" : 8,
            "Rotate" : 8
        },
        {
            "Value" : 9,
            "Rotate" : 6
        }
    ];

    return parseInt(number.toString().split("").map(character => {
        let new_character = equivalents.filter(item => item.Value === Number(character));
        if(new_character.length === 0) return "";
        else return new_character[0].Rotate;
    }).reverse().join(""));

   }

   console.log(solve(54,9886));
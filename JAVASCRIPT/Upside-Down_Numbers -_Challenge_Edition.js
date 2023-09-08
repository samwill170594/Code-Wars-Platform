// https://www.codewars.com/kata/59f98052120be4abfa000304/train/javascript


function upsideDown(x,y){
	let array = Array.from(Array(parseInt(y)-parseInt(x)).keys(), (i) => i+x);
    array.push(parseInt(y));

    let new_array = array.filter(number => !containsInvalidDigits(number));

    for(let arr of new_array){
        counter = (arr === rotate(arr)) ? ++counter : counter;
    }

    return counter;
}


function containsInvalidDigits(number){
    return (number.toString().includes("2") || number.toString().includes("3") ||
    number.toString().includes("4") || number.toString().includes("5") ||
    number.toString().includes("7"));
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

//    console.log(upsideDown('100000','12345678900000000'))
// let array = Array.from(Array(parseInt(100)-parseInt(10)).keys(), (i) => i+10);
// console.log(array)

const msg = "hello";
console.log("true"&&"false")
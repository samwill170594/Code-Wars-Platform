//challenge link : https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

/*
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

*/

function duplicateEncode(word){
    let lowerWord = word.toLowerCase().split("");
    let result = "";

    for(let item of lowerWord){
        
        let ArrayOfCharacter = lowerWord.filter(it => it === item);
        console.log(ArrayOfCharacter);
        if(ArrayOfCharacter.length === 1) result += "("
        else result += ")"
    }

    return result;

}




console.log(duplicateEncode("(( @"));






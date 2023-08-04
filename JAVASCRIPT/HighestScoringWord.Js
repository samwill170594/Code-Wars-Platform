// hcallenge link : https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/


function high(x){
    let tabCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let tabWords = x.split(" ")
    let MaxScorePoint = 0;
    let returnedWord = "";

    for(let word of tabWords) {
        let lowerWord = word.toLowerCase();
        let scorePoint = 0;
        for(let character of lowerWord){
            let CharacterFound = tabCharacters.filter((char) => char === character)[0];
            scorePoint += tabCharacters.indexOf(CharacterFound) + 1;
        }

        if(scorePoint > MaxScorePoint){
            MaxScorePoint = scorePoint;
            returnedWord = word;
        }

    }

    return returnedWord;

}

console.log(high("man i need a taxi up to ubud"));
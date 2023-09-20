// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

function solve(s){
    let vowels = ["a","e","i","o","u"];
    let characters = s.split("");
    let splits = [];

    for(let i = 0; i < characters.length;i++){
        let string = characters[i];
        if(!contains(string,vowels)) continue;
        else{
            for(let j = i+1; j < characters.length;j++){
                if(contains(characters[j],vowels)){
                    string += characters[j];
                }
                else{
                    break;
                }
            }
            splits.push(string);
        }
        
    }
    
    let lengths = splits.map(item => item.length);
    return lengths.reduce((previous,current) => (current >= previous) ? current : previous);
   }

   function contains(character, liste){

    return liste.filter(item => item === character).length > 0 ? true : false;
   }

   console.log(solve("chrononhotonthuooaos"))
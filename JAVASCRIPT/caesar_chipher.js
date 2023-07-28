function encryptor(key, message){

    // alphabet in uppercase
    let upper_alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    // array of cipher text
    let cipher = [];




    for(let i = 0; i < message.length; i++) {

        // if the letter is not in the array, take it as it is
        if(message[i] === " " || upper_alphabet.find(element => element == String(message[i]).toUpperCase()) === undefined ) {
            cipher[i] = message[i];
        }

        
        else{
            // get the letter of the current letter of the message in the alphabet message
            // and return its index position
            let letter = upper_alphabet.find(element => element == String(message[i]).toUpperCase());
            let letterIndex = upper_alphabet.indexOf(letter);

            let cipherLetter = "";
            
            if(letterIndex + key >= 0) {
                cipherLetter = upper_alphabet[(letterIndex + key)%26];
            }
            else {
                let nombre = Math.abs(Math.floor((letterIndex + key) / 26)) + 1;
                cipherLetter = upper_alphabet[(26*nombre+(letterIndex + key))%26];
            }
            
            if(message[i] === letter) {
                cipher[i] = cipherLetter;
            }
            else {
                cipher[i] = String(cipherLetter).toLowerCase();
            }
            
        }

        
        

    }

    return cipher.join("");
}


encryptor(-91,'vIy:0q^ZGp;|xVP?W ')

// https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript

function encodeRailFenceCipher(string, numberRails) {
    let main_tab = string.split("");
    let step = numberRails+1;
    let tab = [];
    let result = "";
    let counter2 = 0;

    while(counter2 < numberRails){
        let counter = step - counter2;
        //let step2 = step - counter2;
    while(counter < main_tab.length){
        if(main_tab[counter] !== undefined) result += main_tab[counter];
        counter += step2;
    }
        console.log("resultat temporaire "+result);

        counter2++;
    }

    return result;

    
    
  }
  
  function decodeRailFenceCipher(string, numberRails) {
    // code
  }

  console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    let lower_text = text.toLowerCase();
    let startCode = 96;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let charactersOfText = lower_text.split('').filter(item => alphabet.includes(item));
    return charactersOfText.map((item,index) => (charactersOfText.join('').charCodeAt(index) - startCode).toString()).join(' ');

  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
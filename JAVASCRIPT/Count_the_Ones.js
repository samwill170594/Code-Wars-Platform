// https://www.codewars.com/kata/5519e930cd82ff8a9a000216/train/javascript


function hammingWeight(x){
    
    let binaries = [];
    let quotient;

    do {
        quotient = Math.trunc(x / 2);
        let remainder = x - quotient * 2;
        binaries.push(remainder);
        console.log(`Quotient : ${quotient}`);
        console.log(`Remainder : ${remainder}`);
        x = quotient;
        
    }  while(quotient >= 1)

    return binaries.filter( i => i === 1).length;
  }


  console.log(hammingWeight(10))
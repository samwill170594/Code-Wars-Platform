//https://www.codewars.com/kata/564fa92d1639fbefae00009d/train/javascript


function factors(x){
    let factors = [];
    if(x < 1 || typeof x !== "number" || x !== parseInt(x)) return -1;

    for(let integer of Array.from(Array(x).keys(), x => x+1)){
        if(x % integer === 0) factors.push(integer);
    }

    return factors.reverse();

}

console.log(factors(54))
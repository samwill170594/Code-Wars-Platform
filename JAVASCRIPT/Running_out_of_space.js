// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript

function spacey(array){
    let result = [];
    let current = "";
    for(let i = 0; i < array.length; i++){
        if(i === 0) result.push(array[i].trim())
        else {
        array.forEach((value, index) => {
            if(index < i) current += value.trim();
        })
    result.push(current+array[i].trim());
    current = "";
}
    }

    return result;
}

console.log(spacey(['kevin', 'has','no','space']));


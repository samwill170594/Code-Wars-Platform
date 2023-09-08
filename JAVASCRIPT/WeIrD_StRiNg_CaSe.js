// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string){

    let strings = string.split(" ");
    let result = [];
    for(let str of strings){

        // for each string
        result.push(str.split("").map((c,index) =>{
            if(index % 2 === 0) return c.toUpperCase();
            else return c.toLowerCase();
        }).join(""));
    }

    return result.join(" ");
}

  console.log(toWeirdCase("This is   a test"));
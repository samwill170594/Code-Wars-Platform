// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

function getPINs(observed) {
    let pins = observed.split("");
    let combinations  = {
        1 : ["1","2","4"],
        2 : ["1","2","3","5"],
        3 : ["2","3","6"],
        4 : ["1","4","5","7"],
        5 : ["2","4","5","6","8"],
        6 : ["3","5","6","9"],
        7 : ["4","7","8"],
        8 : ["5","7","8","9","0"],
        9 : ["6","8","9"],
        0 : ["0","8"]

    };

    let combinationsArray = [];
    let result = [];

    for(let pin of pins){
        combinationsArray.push(combinations[Number(pin)]);
    }

    for(let indexArr in combinationsArray){

        result = getCombinatations(result, combinationsArray[indexArr]);
    }

    console.log(result);
    return result;

  }


  function getCombinatations(array1, array2){
    let result = [];

    if(array1.length === 0) return array2;

    for(let el1 of array1){
        for(let el2 of array2) {
            console.log(el1+el2);
            result.push(el1+el2);
        }
    }

    return result;
  }



  getPINs("8");
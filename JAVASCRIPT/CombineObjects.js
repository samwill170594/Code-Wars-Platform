// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

function combine(...objects){
    if(objects.length === 1) return objects[0];
    let counter = 0;
    let calculatedObject = objects[counter];
    while(counter < objects.length-1){
        calculatedObject = combineTwoObjects(calculatedObject, objects[counter+1]);
        counter++;
    }

    return calculatedObject;

}


function combineTwoObjects(objA, objB) {
    let newObject = {};
    let usedKeys = [];

    for(let keyA in objA){
        if(usedKeys.includes(keyA)) continue;
        else{
            usedKeys.push(keyA);
            newObject[keyA] = keyA in objB ? objA[keyA] + objB[keyA] : objA[keyA];
        }   
    }

    for(let keyB in objB){
        if(usedKeys.includes(keyB)) continue;
        else newObject[keyB] = objB[keyB];
    }
    
    return newObject;
  }

  console.log(combine({ a: 10, b: 20, c: 30 },{ a: 3, c: 6, d: 3 },{ a: 5, d: 11, e: 8 }))
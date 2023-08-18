// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.
*/

function solution(input, markers) {
  
    // split the input into array of rows
    let rows = input.split("\n");

    // the result of the operation
    let arrayResult = [];


        for(let row of rows){
            let result = row;
            for(let marker of markers){
                // do nothing if the marker is not in the string
                if(result.indexOf(marker) === -1) continue;

                // if the marker is in the string
                // get tne index of the marker in the string
                // split the row and retrieve only the first item
                let indexMarker = result.indexOf(marker);
                result = result.split(marker)[0];

            }
            // push the result in arrayResult
            arrayResult.push(result.trim());

        }
        console.log(arrayResult.join("\n"));
        return arrayResult.join("\n");



}


solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);
// https://www.codewars.com/kata/62ca07aaedc75c88fb95ee2f/train/javascript

function ascendDescend(length, minimum, maximum) {
    let str_number = "";
    let isAscending = true;
    let num = minimum;

    while(str_number.length < length){
        if(isAscending){
            str_number += num;
            if(str_number.length < length){
                
                if(num < maximum) num++;
                else {
                    isAscending = false;
                    num--;
                }
            }
            else if(num === maximum){
                isAscending = false;
                num--;
            }
        }

        else{
            str_number += num;
            if(str_number.length < length){
                if(num > minimum) num--;
                else {
                    isAscending = false;
                    num++;
                }
            }
            else if(num === minimum){
                isAscending = true;
                num++;
            }
        }
        
    }
    // console.log(str_number);
    return str_number;
    
  }
  console.log(ascendDescend(14, 0, 2));
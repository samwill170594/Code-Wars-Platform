// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
    let default_value = 0;
    let counter = 0;
    let result = "";

    while(counter < size){
        result += Number(!default_value);
        default_value = Number(!default_value);
        counter++;
    }

    return ""+result;
  }

  console.log(stringy(4));
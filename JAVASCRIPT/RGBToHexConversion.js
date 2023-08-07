// challenge link : https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b){
    let rgbs = [r,g,b];
    let result = "";
    let maxValue = 255;

    for (value of rgbs){
        if(value > maxValue) {
            let temp = maxValue.toString(16).toUpperCase();
            if(temp.length == 1){
                result += "0"+temp
            }
            else{
                result += temp
            }
            
        }
        else if (value <= 0) result += "00"
        else {
            let temp = value.toString(16).toUpperCase();
            if(temp.length == 1){
                result += "0"+temp
            }
            else{
                result += temp
            }
        }
    }

    return result;
  }


  console.log(rgb(300,255,255));

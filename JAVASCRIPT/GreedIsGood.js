// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score( dice ) {
    let points = 0;
    let numberOfValues = Array.from(Array(6).keys(), x => dice.filter(i => i === x+1).length);
    console.log(numberOfValues);
    let multiplier = 0;
    let single = 0;
    for(let i = 0; i < numberOfValues.length; i++){
        switch(i+1){
            case 1:
                multiplier = 1000;
                single = 100;
                break;
            case 2:
                multiplier = 200;
                single = 0;
                break;
            case 3:
                multiplier = 300;
                single = 0;
                break;
            case 4:
                multiplier = 400;
                single = 0;
                break;
            case 5:
                multiplier = 500;
                single = 50;
                break;
            case 6:
                multiplier = 600;
                single = 0;
                break;
        }

        points += Math.trunc(numberOfValues[i] / 3) * multiplier + (numberOfValues[i] % 3) * single;

    }

    return points;
  }

console.log(score([6, 6, 6, 3, 3]))


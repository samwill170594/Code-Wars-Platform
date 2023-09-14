// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    let quantities = [];
    for(let ingredient of Object.keys(recipe)){
        if(typeof available[ingredient] !== "undefined")
            quantities.push(Math.trunc(available[ingredient] / recipe[ingredient]));
        else return 0;
    }

    return quantities.reduce((previous, current) => (previous < current) ? previous : current);
  }



  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
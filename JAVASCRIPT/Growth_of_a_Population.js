// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    let number_years = 0;
    let population = p0;

    while(population < p){
        population = population + (percent/100) * population + aug;
        number_years++;
        console.log(population)
    }
    return number_years;
}

console.log(nbYear(1000,2,50,1214))
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
    return s.split(' ').filter(item => item !== ' ').map(item => item.length).reduce((previous,current) => (previous < current) ? previous : current);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

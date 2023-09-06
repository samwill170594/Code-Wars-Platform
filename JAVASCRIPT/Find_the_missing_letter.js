// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array)
{
  let code_first_character = array[0].charCodeAt(0);
  let isUpperCase = (array[0] === array[0].toUpperCase());
  for(let item of array){
    let code = item.charCodeAt(0);
    if(code_first_character === code){
      code_first_character++;
    }
    else break;
  }
  return (isUpperCase) ? String.fromCharCode(code_first_character).toUpperCase() : String.fromCharCode(code_first_character).toLowerCase();
}
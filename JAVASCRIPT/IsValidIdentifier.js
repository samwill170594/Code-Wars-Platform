// https://www.codewars.com/kata/563a8656d52a79f06c00001f/train/javascript


function isValid(idn) {
    let allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    let NonAllowedCharacters = "- |[]:";
    // Each identifier must have at least one character.
    // The first character must be picked from: alpha, underscore, 
    //or dollar sign. The first character cannot be a digit.
    if(idn.length < 1 || !isNaN(idn.split("")[0]) || !allowedCharacters.includes(idn.split("")[0])) return false;
    if(idn.split("").some(value => NonAllowedCharacters.includes(value))) return false;
    return true;
  }

  console.log(isValid("okay_ok1"))
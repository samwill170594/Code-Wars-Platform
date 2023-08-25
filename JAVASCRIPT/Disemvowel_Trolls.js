// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript


function disemvowel(str) {
    return str.split("").filter((item) => !["a","e","i","o","u","A","E","I","O","U"].includes(item)).join("");
  }

  console.log(disemvowel("This website is for losers LOL!"));
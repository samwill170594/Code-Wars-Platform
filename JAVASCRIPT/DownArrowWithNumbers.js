// https://www.codewars.com/kata/5645b24e802c6326f7000049/train/javascript

function getADownArrowOf(n) {
    let counter = 0;
    let str = [];
    if(n < 1) return "";
    if(n===1) return "1";
    for(let i = n; i >= 1; i--){
        console.log(UpTo(i));
        console.log(DownTo(i));
        if(i !== 1)str.push(getSpaces(counter)+UpTo(i)+DownTo(i)+"\n");
        else str.push(getSpaces(counter)+UpTo(i)+DownTo(i));
        counter++;
    }

    return str.join("");
  }

  function getSpaces(n){
    if(n === 0) return "";
    let counter = 0;
    let str = "";
    while(counter <n){
        counter++;
        str += " ";
    }
    return str;
  }

  function UpTo(n){
    return Array.from(Array(n).keys(), x => (x + 1) % 10).join("");
  }

  function DownTo(n){
    console.log(Array.from(Array(n-1).keys(), x => (((n-1) - x) % 10)).join(""));
    return Array.from(Array(n-1).keys(), x => (n-1) - (x % 10)).join("");
  }

  console.log(getADownArrowOf(11))
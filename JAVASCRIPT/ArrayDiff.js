// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript


function arrayDiff(a, b) {
  let newA = [...a];
  let newB = [...b];
  let counter = 0;
  let initialCounter = 0;
  while(initialCounter < b.length){
    let currentItem = b[counter];
    if(newA.includes(currentItem)){
        // retirer currentItem de newA et de newB
        newA = newA.filter(item => item !== currentItem);
        newB = newB.filter(item => item !== currentItem);
    }

    counter++;
    initialCounter++;
  }
  return newA;
}

console.log(arrayDiff([1,2,3], [1,2]))
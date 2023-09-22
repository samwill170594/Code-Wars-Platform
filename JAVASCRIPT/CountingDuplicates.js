// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
    let lower_text = text.split('').map(item => item.toLowerCase());
    let counts = [];

    lower_text.forEach(value => {
        counts.push(lower_text.filter(item => item === value).length);
    });

    return counts.reduce((previous, current) => (previous > current) ? previous : current);
  }
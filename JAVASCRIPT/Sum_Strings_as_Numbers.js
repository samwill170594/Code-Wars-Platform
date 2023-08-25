// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

function sumStrings(a,b) { 
    let res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop();
      res = c % 10 + res;
      c = c > 9;
    }
    if(res[0] === "0") return res.slice(1);
    else return res;
}

console.log(sumStrings("712569312664357328695151392","8100824045303269669937"))
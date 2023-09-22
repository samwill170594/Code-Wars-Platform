// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s)
{
  return s.length % 2 !== 0 ? s[Math.trunc(s.length / 2)] : s.split('').slice((s.length / 2) - 1,(s.length / 2)+1).join('');
}


console.log(getMiddle("testing"))
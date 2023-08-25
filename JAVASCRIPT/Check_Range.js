// https://www.codewars.com/kata/591e833267cd75cb02000007/train/javascript


checkRange=(a,x,y) => checkRange=(a,x,y,c=0)=>a.map(v=>c+=v<x==v>y)|c;

console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7));

// https://www.codewars.com/kata/59b81886460387d8fc000043/train/javascript

const reverse = a => {
    let result = [];
    for(let i = a.length - 1; i >=0; i--){
        result.push(a[i]);
    }
    return result;
}

console.log(reverse([...'01234567890123456789']))
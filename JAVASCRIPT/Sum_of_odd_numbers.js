// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
    let items = [];
    let distanceFromFirstItem = 0;
    if(n === 1) return 1;
    for(let i = 1; i <=n ; i++){
        distanceFromFirstItem += 2 * (i - 1);
    }
    let firstItem = distanceFromFirstItem + 1;
    while(items.length < n){

        items.push(firstItem);
        firstItem += 2;
    }

    return items.reduce((previous, current) => previous + current,0);
}

console.log(rowSumOddNumbers(42));
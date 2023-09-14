//https://www.codewars.com/kata/566c3f5b9de85fdd0e000026/train/javascript

function stairs(n)
{  
    let result = ""
    if(n < 1) return "";
    for(let i = 1; i <=n;i++){
        let array = Array.from(Array(i).keys(), i => (i+1)%10);
        let temp = array.join(" ")+" "+array.reverse().join(" ");
        if(i === n)
            result += " ".repeat(n*3 + n - temp.length-1)+ temp;
        else
        result += " ".repeat(n*3 + n - 1 - temp.length) + temp+"\n";
        
        
    }

    return result;
}

console.log(stairs(10))

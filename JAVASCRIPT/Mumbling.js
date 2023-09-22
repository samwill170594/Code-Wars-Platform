// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
	return s.split('').map((item,index) => getFormattedChar(item,index+1)).join('-');
}

function getFormattedChar(item,index){
    let counter = 0;
    let str = "";
    while(counter < index){
        counter++;
        str += (counter === 1) ? item.toUpperCase() : item.toLowerCase();
    }
    return str;
}

console.log(accum("ZpglnRxqenU"))
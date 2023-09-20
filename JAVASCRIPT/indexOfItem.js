// https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript

function find(array, element) 
{
    return (array.filter(i => i === element).length === 0) ? "Not found" : array.map((value, index) => {
        if(index === element) return index;
        else return ""
    }).filter(i => i !== "")[0];
}
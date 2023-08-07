//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero() {

    let FirstOperand = 0;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function one() {
    let FirstOperand = 1;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function two() {
    let FirstOperand = 2;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function three() {
    let FirstOperand = 3;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function four() {
    let FirstOperand = 4;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function five() {
    let FirstOperand = 5;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function six() {
    let FirstOperand = 6;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function seven() {
    let FirstOperand = 7;
    console.log(arguments);
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function eight() {
    let FirstOperand = 8;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}
function nine() {
    let FirstOperand = 9;
    if(arguments.length === 0) return FirstOperand;
    return calculus(FirstOperand,arguments[0]["operator"],arguments[0]["number"]);
}



function calculus(FirstOperand,operator, SecondOperand){
    switch(operator){
        case "+":
            return FirstOperand + SecondOperand;
        case "-":
            return FirstOperand - SecondOperand;
        case "*":
            return FirstOperand * SecondOperand;
        case "/":
            return Math.floor((FirstOperand / SecondOperand));
        default:
            return "BIZARRE";
    }
}

function plus(number) {
    let operator = "+";
    return {operator, number};
}
function minus(number) {
    let operator = "-";
    return {operator, number};
}
function times(number) {
    let operator = "*";
    return {operator, number};
}
function dividedBy(number) {
    let operator = "/";
    return {operator, number};
}

console.log(seven(dividedBy(five())));
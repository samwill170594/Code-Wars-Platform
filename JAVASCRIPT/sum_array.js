// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Numbers
function sum (numbers) {
    "use strict";
    return (numbers.length === 0) ? 0 : numbers.reduce((previous, current) => previous + current,0);
    
};
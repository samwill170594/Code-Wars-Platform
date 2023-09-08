// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

function twoSort(s) {
    return s.sort()[0].split("").join("***");
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));

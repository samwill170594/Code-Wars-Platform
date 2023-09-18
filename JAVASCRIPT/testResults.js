// https://www.codewars.com/kata/599db0a227ca9f294b0000c8/train/javascript

function testResult(array) {
    return array.filter(i => i >=1 && i <=8).length > 0 ?  [parseFloat((array.reduce((previous,current) => previous+current) / array.length).toFixed(3)),
    {
        "h" : array.filter(i => i >=9 && i <=10).length,
        "a" : array.filter(i => i >=7 && i <=8).length,
        "l" : array.filter(i => i >=1 && i <=6).length
    }] : [parseFloat((array.reduce((previous,current) => previous+current) / array.length).toFixed(3)),
    {
        "h" : array.filter(i => i >=9 && i <=10).length,
        "a" : array.filter(i => i >=7 && i <=8).length,
        "l" : array.filter(i => i >=1 && i <=6).length
    }, "They did well"];
  }

  console.log(testResult([10,9,9,10,9,10,9]))
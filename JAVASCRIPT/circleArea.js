var circleArea = function(radius) {
    return (radius !== "number" || radius <= 0) ? false: parseFloat((Math.PI * radius * radius).toFixed(2));
  };

  console.log(circleArea("number"))
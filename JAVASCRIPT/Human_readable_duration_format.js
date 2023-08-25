// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration (seconds) {
    
    // numbers retrieved from functions
    if(seconds === 0) return "now";
    let result_years = Years(seconds);
    let number_years = result_years[0];
    let result_days = Days(result_years[1]);
    let number_days = result_days[0];
    let result_hours = Hours(result_days[1]);
    let number_hours = result_hours[0];
    let result_min = Minutes(result_hours[1]);
    let number_min = result_min[0];
    let number_seconds = result_min[1];

    // result formatted as array of objects with Id representing the type and Value as the value got
    // the array is filtered to remove all zeroes values
    let data = [
        {
            Id : "Year",
            Value : number_years
        },
        {
            Id : "Day",
            Value : number_days
        },
        {
            Id : "Hour",
            Value : number_hours
        },
        {
            Id : "Minute",
            Value : number_min
        },
        {
            Id : "Second",
            Value : number_seconds
        },

    ].filter((item) => item.Value != 0);

    // format variable of the result
    let format = [];
    for(item of data){
        format.push(item.Value + ((item.Value > 1) ? ` ${item.Id.toLowerCase()+"s"}`: ` ${item.Id.toLowerCase()}`));
    }

    

    if(format.length === 1) return format[format.length - 1];
    else return format.slice(0,format.length-1).join(", ") + " and " + format[format.length - 1];

  }

  // retrieve the number of years and the remaining seconds
  function Years(value){

    let coef = 365 * 24 * 60 * 60;
    let number_years = Math.floor(value/coef);
    let remaining = value - number_years * coef;
    return [number_years, remaining];
  }

  // retrieve the number of days and the remaining seconds
  function Days(value){
    let coef = 24 * 60 * 60;
    let number_days = Math.floor(value / coef);
    let remaining = value - number_days * coef;

    return [number_days, remaining];
  }

  // retrieve the number of hours and the remaining seconds
  function Hours(value){
    let coef = 60 * 60;
    let number_hours = Math.floor(value/coef);
    let remaining = value - coef * number_hours;

    return [number_hours, remaining];
  }

  // retrieve the number of minutes and the remaining seconds
  function Minutes(value){
    let coef = 60;
    let number_minutes = Math.floor(value/coef);
    let remaining = value - number_minutes * coef;
    return [number_minutes, remaining];
  }
  

  console.log(formatDuration(3600));
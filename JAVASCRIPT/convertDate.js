// https://www.codewars.com/kata/59b0a6da44a4b7080300008a/train/javascript

function to24hourtime(hour, minute, period) {
    // hour will always range from 1 to 12 (inclusive)
    // minute will always range from 0 to 59 (inclusive)
    // period will always be either "am" or "pm"
    switch(period){
        case "am":
            return (hour === 12) ? "00"+minute.toString().padStart(2,"0") : hour.toString().padStart(2,"0") + minute.toString().padStart(2,"0");
        case "pm":
            return (hour === 12) ? "12"+minute.toString().padStart(2,"0") : (hour+12).toString().padStart(2,"0") +minute.toString().padStart(2,"0");
        default:
            return "0000";
    }
    
  }

  console.log(to24hourtime(9, 45, "pm"))

  
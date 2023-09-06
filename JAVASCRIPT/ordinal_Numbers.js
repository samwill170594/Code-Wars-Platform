function ordinal(number, brief) {

    // get last digit of a number with slice method
    let last_digit = parseInt(number.toString().slice(-1));
    // get last two digits of a number with slice method
    let last_two_digits = (number < 10) ? last_digit : parseInt(number.toString().slice(-2));

    switch(last_two_digits) {

        case 2:
            return  brief ? "d" : "nd";
        case 3:
            return  brief ? "d" : "rd";
        case 0:
        case 11:
        case 12:
        case 13:
            return "th";
        default:
            switch(last_digit){
                case 1:
                    return "st";
                case 2:
                    return brief ? "d" : "nd";
                case 3:
                    return brief ? "d" : "rd";
                default:
                    return "th";
            }
    }


  }

  //console.log(ordinal(33, true))
  console.log(typeof "12345".slice(-2))


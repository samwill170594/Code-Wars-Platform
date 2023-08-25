// https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript

function getParticipants(handshakes){
    if(handshakes === 0) return 0;
    let discriminant = 4 + 8 * handshakes;
    let number_of_participants = Math.floor(1 + (Math.sqrt(discriminant))/2);
    let calculated_handshakes = factorial(number_of_participants)/ (2 * factorial(number_of_participants - 2));
    if(handshakes <= calculated_handshakes) return number_of_participants;
    else return number_of_participants + 1;
    
  }


function factorial(n){
    if ( n < 0) 
        return -1;
  else if (n == 0) 
      return 1;
  else return (n * factorial(n - 1));
}

console.log(getParticipants((553)));
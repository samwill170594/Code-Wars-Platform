// https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript

function findRoutes(routes) {
    for(let i = 0; i < routes.length; i++) {
        //permuter le premier élément
        let new_routes = [...routes];
        let temp = new_routes[0];
        new_routes[0] = new_routes[i];
        new_routes[i] = temp;

        let result = showRoute(new_routes);
        console.log(result.length === new_routes.length + 1);
        if(result.length === new_routes.length + 1) return result.join(", ");
    }
  }


  function showRoute(routes){
    let itinerary = [];
    let isfinished = false;
    let index = 0;
    
    while(!isfinished){
        if(index !== -1){
            let currentLocation = routes[index];
        if(!itinerary.includes(currentLocation[0])) itinerary.push(currentLocation[0]);

        if(!itinerary.includes(currentLocation[1])) itinerary.push(currentLocation[1]);
        else isfinished = false;
        
        index = routes.findIndex((value) => value[0] === currentLocation[1]);
        }

        else{
            isfinished = true;
        }
        
        
    }
    //return itinerary.join(", ")
    return itinerary

  }


console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]))
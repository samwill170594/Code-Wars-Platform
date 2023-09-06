// https://www.codewars.com/kata/5550d638a99ddb113e0000a2


function josephus(items,k){
    
    let items_checked = [];
    let result = [];
    let index = k;
    let temp = items.slice(index);
    let length = items.length;

    while(result.length < length)
    {
        
        let currentItem = temp[index];
        
            console.log(`Added ==> ${currentItem}`)
            result.push(currentItem);
            temp = items.slice(index+1).length !== 0 ? items.slice(index+1) : items;
            items.splice(index+1,1);
            
            //index = k-1;
            
        }        

    
    return result;
    
  }


  

  console.log(josephus([1,2,3,4,5,6,7,8,9,10],2))

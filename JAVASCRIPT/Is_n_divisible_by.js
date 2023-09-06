function isDivisible(...arguments){
  
    for(let arg of arguments){
      if(arguments[0] % arg !== 0) return false
    }
    
    return true;
  }
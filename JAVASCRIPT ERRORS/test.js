try {
    throw new TypeError("oops");
  } catch (e) {
    console.log(e.name); 
    console.log(e.message);
  }
//Given an integral number, determine if it's a square number: e.g 4 is a perfect square because you can sqrt 16


//SOLUTION 1

var isSquare = function(n){
  
    if (n < 0){return false}
    else if (Number.isInteger(Math.sqrt(n))){return true}
    else {return false}
    
    
   // return false; // fix me
  }

//SOLUTION 2
const isSquare = n => Math.sqrt(n) % 1 === 0


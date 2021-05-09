// Your code here
const mapToNegativize = function(array) {
   let result = []; 
   for(let i = 0; i < array.length; i++) {
      let el = array[i];
      result.push(el * -1);       
   }
   return result;    
}

const mapToNoChange = function(array) {
   let result = []; 
   for(let i = 0; i < array.length; i++) {
      let el = array[i];
      result.push(el);       
   }
   return result;    
}

const mapToDouble = function(array) {
   let result = []; 
   for(let i = 0; i < array.length; i++) {
      let el = array[i];
      result.push(el * 2);       
   }
   return result;    
}

const mapToSquare = function(array) {
   let result = []; 
   for(let i = 0; i < array.length; i++) {
      let el = array[i];
      result.push(el * el);       
   }
   return result;    
}

const reduceToTotal = function(array, start=0) {
   let result = start;
   for(let i = 0; i < array.length; i++) {
      result += array[i]; 
   }
   return result;
}

const reduceToAllTrue = function(array) {
   let result = true;
   for(let i = 0; i < array.length; i++) {
      if(array[i] === false) {
         result = false;    
      }    
   } 
   return result;
}

const reduceToAnyTrue = function(array) {
   for(let i = 0; i < array.length; i++) {
      if(array[i] === true) {
         return true;    
      }    
   }
   return false; 
}


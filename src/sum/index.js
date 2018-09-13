/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  if(isNaN(a) || isNaN(b)){throw 'error';}
  if(!isFinite(a) || !isFinite(b)){throw 'error';}
  if(typeof(a) !=='number' || typeof(b) !=='number'){throw "error";}
  return a + b;
};

export default sum;

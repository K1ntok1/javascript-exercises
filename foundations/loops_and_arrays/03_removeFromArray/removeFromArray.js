const removeFromArray = function(arr, ...Args) {

  if (!Array.isArray(arr)) return "The first arg is not an array";

  for (let i = 0; i < Args.length; i++) arr = arr.filter((element) => element !== Args[i]);

  return arr;

};

// Do not edit below this line
module.exports = removeFromArray;

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var keyValues = {};
  var keyCount = 0;
  var output = false;
  nums.forEach(function(item, index) {
    typeof keyValues[item] === "undefined"
    ? keyValues[item] = ++keyCount
    : keyValues[item] = ++keyValues[item];
    keyCount = 0;
  })
  for (var item in keyValues) {
    if (keyValues[item] > 1) {
      output = true;
      break;
    }
  }
  return output;
    
};
// sample test
console.log(containsDuplicate([1,2,3,4]) === false)
console.log(containsDuplicate([1,2,3,1]) === true)
http://www.thatjsdude.com/interview/js1.html#sumOfTwo
https://coderbyte.com/algorithm/two-sum-problem

1) Naive solution
A naive approach to this problem would be to loop through each number and then loop again through the array looking for a pair that sums to S. The running time for the below solution would be O(n2) because in the worst case we are looping through the array twice to find a pair. 

- Find the 2 numbers that adds upto be 7:
twoSum([3, 5, 2, -4, 8, 11], 7);

/* 
 * two sum function will return 
 * all pairs in the array that sum up to 5
 */
function twoSum(arr, s){
  var sum = [];

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
    // check each other element in the array
    for (var j = i + 1; j < arr.length; j++) {
      // determine if these two elements sum to s
      if (arr[i] + arr[j] === s) {
        sums.push([arr[i], arr[j]]);
      }
    }
  }

}
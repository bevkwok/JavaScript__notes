// Sliding window pattern involoves creating a window which can either be an array or number from one position to another.
//useful for keeping track of a subset of data that is continuous

//or find maxSubarraySum(arr, int); 
// find the maxSum, number has to be next to each other

// ************************* Example - maxSubarraySum ************************* 

//calculate the maximum sum of n consecutive elements in the array

// *************** MyKey - O(N) ***************

function maxSubarraySum(arr, int){
    var i = 0;
    var max = -Infinity;
    var newMax = 0
    var j = 0;
    for(var i = 0; i < int; i++){
        newMax += arr[i];
        if(newMax > max) {
            max = newMax;
        }
    }
    while(int < arr.length) {
        var newMax = max - arr[j] + arr[int];
        if(newMax >= max) {
            max = newMax;
            j++;
            int++;
        } else {
            j++;
            int++;
        }
    }
    return max;
}

// console.log(maxSubarraySum([1,6,2,3,6,4,1],3));
// console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
// console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum([4,2,1,6,2],4));
console.log(maxSubarraySum([],4));


// *************** Key - O(N) ***************

function maxSubarraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

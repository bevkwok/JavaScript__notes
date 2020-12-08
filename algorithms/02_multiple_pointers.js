// pointers represent an index or position
// it moves towards the beginning, middle or end based on a certain condition

// ************************* Example - sumZero ************************* 

// find the first pair which has a sum of 0, in a sorted array 

// *************** MyKey - O(N^2) ***************

function sumZero1(arr) {
    let pair = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = arr.length -1; j > 0; j--) {
            if( arr[i] + arr[j] === 0 ) {
                pair.push(arr[i]);
                pair.push(arr[j]);
                return pair;
            }
        }
    }
    return pair;
}

// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3]));

// *************** Key - O(N) *************** 

function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return ([arr[left], arr[right]]);
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
    return ("not a pair sum euqal to 0");
}

// console.log(sumZero2([-3, -2, -1, 0, 1, 2]));
// console.log(sumZero2([-3, -2, -1, 0, 5]));


// ************************* Challenge - countUniqueValue ************************* 

//count how many different number

// *************** MyKey - O(N) ***************

function countUniqueValue1(arr){
    let firstPoint = 0;
    let secondPoint = firstPoint + 1;
    var count = 1;
    if(arr.length === 0){
        return (0);
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1] && (i+1) < arr.length){
            count++;
        };
    }
    return count;
}

// console.log(countUniqueValue1([1,2,3,4,4,4,7,7,12,12,13]));

// *************** Key - O(N) ***************
function countUniqueValue2(arr){
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

// console.log(countUniqueValue2([1,2,3,4,4,4,7,7,12,12,13]));


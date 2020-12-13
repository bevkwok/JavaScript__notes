//Sorting?
//Definition : 
//Rearrange the items in a collection so the items are in a certain order
//worst: O(N**2)   best: O(N)

// *************** Built-in JS sorting ***************
//Do basic sorting with build in JS sort method

//Sort number from smallest to largest

function numberCompare1(num1, num2){
    return num1 - num2;
}
console.log([9,3,7,1,4].sort(numberCompare1));


//Sort number from largest to smallest

function numberCompare2(num1, num2){
    return num2 - num1; //change to num2 - num1
}
console.log([9,3,7,1,4].sort(numberCompare2));


//Sort length of string from shortest to largest

function stringCompare1(str1, str2){
    return str1.length - str2.length;
}
console.log(["apple", "hi", "pear", "ice cream"].sort(stringCompare1));


// *************** BubbleSort ******************************
// Not efficient, not commonly used
// Best for almost sorted array
// Larges value bubble up to the top
// compare 2 things, if the left one larger, swap

// *************** way to Swap
// ES6
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// *************** O(N^2) - my key

function bubbleSort1(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
// console.log(bubbleSort1([9,3,6,8,1,2,4]));

// *************** O(N) - my key

function bubbleSort2(arr){
    var i = 0;
    while(i < arr.length){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        i++;
    }
    return arr;
}
// console.log(bubbleSort2([9,3,6,8,1,2,4]));

// *************** O(N) - instructor's key

function bubbleSort3(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort3([9,3,6,8,1,2,4]));

// *************** Optimization
// if no swapping happen in previous round. break.

function bubbleSort4(arr){
    var noSwaps; //create variable noSwaps
    for(let i = arr.length; i > 0; i--){
        noSwaps = true; //nothing as swapped to begin
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false; // swap happened
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
console.log(bubbleSort4([9,3,6,8,1,2,4]));


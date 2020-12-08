// *************** My Key ***************

function binarySearch(arr, value){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(start < middle) {
        if(arr[middle] == value){ return middle;
        } else if(arr[start] === value){ return start;
        } else if(arr[end] === value){ return end;
        } else if(value > arr[middle]){
            start = middle;
            middle = Math.floor((start + end) / 2);
        } else {
            end = middle;
            middle = Math.floor((end + start) / 2);
        }
    }
    return -1;
}

// *************** A Better Key ***************
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// *************** Refactored Key ***************

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1,3,5,10,13], 12));
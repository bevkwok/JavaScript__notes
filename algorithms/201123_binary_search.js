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
            start = middle + 1;
            middle = Math.floor((start + end) / 2);
        } else {
            end = middle - 1;
            middle = Math.floor((end + start) / 2);
        }
    }
    return -1;
}

console.log(binarySearch([1,3,5,10,13], 12));
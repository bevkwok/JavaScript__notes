// *************** Insertion Sort ******************************
// have a sorted section on the left and insert value
// gradually build up the sorted section
// best if there are new incoming data to add to already sorted left side

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var j = i;
        while(j > 0 && arr[j] < arr[j-1]){
            [arr[j],arr[j-1]] = [arr[j-1], arr[j]];
            j--
        }
    }
    return arr;
}

console.log(insertionSort([8,2,5,9,1,4,7,3]));
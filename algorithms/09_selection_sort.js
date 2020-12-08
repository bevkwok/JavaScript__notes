// *************** Selection Sort ******************************
// Similar to bubble sort but it sorts the small value first
// find the minimun in an array and swap

function selectionSort1(arr){
    for(var i = 0; i < arr.length; i++){
        var minIdx = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }
        if(i !== minIdx){ //only swap if minIdx changed**
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}
console.log(selectionSort1([5,3,4,1,2]));
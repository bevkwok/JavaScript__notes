// *************** Merge Sort ******************************
// merging or sorting (spliting up)
// split an array down to 0 or 1 elements
// merging it in correct order

// 1. creating a merging function first
function mergingArr(arr1, arr2){
    var i = 0;
    var j = 0;
    var mergedArr = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    while(i !== arr1.length){
        mergedArr.push(arr1[i]);
        i++;
    }

    while(j !== arr2.length){
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

// 2. sorting
function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let midpoint = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, midpoint));
    let rightArr = mergeSort(arr.slice(midpoint));
    return mergingArr(leftArr, rightArr);

    // if(leftArr.length > 1 || rightArr.length > 1){
    //     return mergeSort(leftArr) + mergeSort(rightArr);
    // } else {
    //     return mergingArr(leftArr, rightArr);
    // }
}

console.log(mergeSort([1,4,6,8,10,3,7]));
// *************** Quick Sort ******************************
// pick a pivot
// if other item in array small then pivot, move to left
// greater then pivot, move to right.

// *************** my fail attempt
// function quickSort(arr){
//     let pivot = 0;
//     let count = 0;
//     if(arr.length <= 1){
//         return arr;
//     }
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < arr[pivot]){
//             count++
//             [arr[count], arr[i]] = [arr[i], arr[count]];
//         }
//     }
//     if(count > 0){
//         [arr[pivot], arr[count]] = [arr[count], arr[pivot]];
//         let leftArr = quickSort(arr.slice(0, count + 1));
//         let rightArr = quickSort(arr.slice(count + 1));
//         return leftArr.concat(rightArr);
//     } else {
//         return arr;
//     }

// }

function pivotHelper(arr, start=0, end=arr.length - 1){
    let pivot = arr[start];
    let pivotIdx = start;
    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            pivotIdx++;
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
        }
    }
    [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];
    return pivotIdx;
}

function quickSort1(arr, left=0, right=arr.length-1){
    if(left < right){
        let index = pivotHelper(arr, left, right);
        quickSort1(arr, left, index-1);
        quickSort1(arr, index+1, right);
    }
    return arr;
}
console.log(quickSort1([2,3,6,7,1,-3]));




function MinimumSwaps(arr) {
    let swapCount = 0;
    let i = 0;
    let j = 1;
    while(i < arr.length) {
        if(arr[i] - 1 !== i && arr[j] - 1 !== i) {
            j++
        } else if (arr[i] - 1 !== i && arr[j] - 1 === i){
            swapCount++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        } else {
            i++;
        }
    }
    console.log(swapCount);
    return swapCount;
}

// console.log(MinimumSwaps([1, 3, 5, 2, 4, 6, 7]));


function MinimumSwaps1(arr) {
    let swapCount = 0;
    let i = 0;
    while (i < arr.length) {
        if(arr[i] - 1 !== i) {
            let temp = arr[i];
            let correctIdx = arr[i] - 1;
            arr[i] = arr[correctIdx];
            arr[correctIdx] = temp;
            swapCount++
        } else {
            i++;
        }
    }
    console.log(swapCount);
}
console.log(MinimumSwaps1([2, 3, 4, 1, 5]));




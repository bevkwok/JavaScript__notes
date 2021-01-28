// subsequence is a important concept
// need to match number and the order
// can use 2 pointers method


// O(N) O(1)
function validSubsequence4(array, sequence){ // other key 2
    let seqIdx = 0;
    for(let i = 0; i < array.length; i++){
        if(seqIdx === sequence.length) break;
        if(array[i] === sequence[seqIdx]) seqIdx++;
    }
    return seqIdx === sequence.length;
}

function validSubsequence3(array, sequence){ // other key
    let arrIdx = 0;
    let seqIdx = 0;
    while(arrIdx < array.length && seqIdx < sequence.length){
        if(array[arrIdx] === sequence[seqIdx]){
            seqIdx++;
        }
        arrIdx++;
    }
    if(seqIdx === sequence.length) {
        return true;
    } else {
        return false;
    }
}

function validSubsequence2(array, sequence){ // work
    let arrIdx = 0;
    let seqIdx = 0;
    let count = 0;
    while(arrIdx < array.length && seqIdx < sequence.length){
        if(array[arrIdx] === sequence[seqIdx]){
            seqIdx++;
            arrIdx++;
            count++;
        } else {
            arrIdx++;
        }
    }
    if(count === sequence.length){
        return true;
    } else {
        return false;
    }
}


function validSubsequence1(array, sequence){ // fail
    const totalMatch = sequence.length;
    let count = 0;
    const storedSequence = {};
    for(let i = 0; i < array.length; i++){
        storedSequence[array[i]] = true;
    }
    while(count < totalMatch){
        if(storedSequence[sequence[count]]){
            console.log("count=" + count);
            count++;
        } else {
            return false;
        }
    }
    if(count >= totalMatch){
        return true;
    } else {
        return false;
    }
}

console.log(validSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
function validSubsequence(array, sequence){
    const totalMatch = sequence.length;
    let count = 0;
    const storedSequence = {};
    for(let i = 0; i < totalMatch; i++){
        storedSequence[sequence[i]] = true;
    }
    for(let j = 0; j < array.length; j++){
        if(storedSequence[array[j]]){
            count++;
        }
        console.log("count=" + count);
    }
    if(count >= totalMatch){
        return true;
    } else {
        return false;
    }
}
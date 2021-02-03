function arrayManipulation(n, queries) {
    // queries = array with sub arrays
    // queries.length = array.length
    // queries[j][0] is starting index + 1
    // queries[j][1] is ending index + 1 
    // queries[j][2] is value to add
    let arr = [];
    let max = -Infinity;
    //// build arr
    for(let i = 0; i < n; i++) {
        arr.push(0);
    }
    let j = 0;

    while(j < queries.length ){
        let startIdx = queries[j][0] - 1;
        let endIdx = queries[j][1];
        let k = startIdx;
        while(k < endIdx){
            arr[k] += queries[j][2]
            k++;
        }
        j++;
    }
    // loop arr and find max

    for(let x = 0; x < n; x++) {
        if(arr[x] > max) {
            max = arr[x];
        }
    }
    return max;
}

console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));
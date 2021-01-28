// will be provide a array
// need to find out if there are 2 numbers add together = target


// Solution 1
function twoNumberSum(array, target){
    if(array.length <= 1) return [];
    for(let i = 0; i < array.length; i++){
        let j = i + 1;
        while(j < array.length){
            if(array[i] + array[j] === target){
                return [array[i], array[j]];
            } else {
                j++;
            }
        }
    }
    return [];
}

// Solution 2 - hashtable
// Time = O(N)
// Space = O(N)
function twoNumberSum2(array, target){
    let storedNum = {};
    for(let i = 0; i < array.length; i++){
        let currentNum = array[i];
        let neededNum = target - currentNum;
        if(storedNum[neededNum]){
            return [neededNum, currentNum];
        } else {
            storedNum[currentNum] = true;
        }
        console.log(storedNum);
    }
    return [];
}

// Solution 3 - sorting it first
// Time = O(NlogN)
// Space = O(1)
function twoNumberSum3(array, target){
    let sortedArray = array.sort();
    // one left pointer, pointing at the smallest number
    let i = 0;
    let left = sortedArray[i];
    // one right pointer, pointing at the largest number
    let j = array.length - 1;
    let right = sortedArray[j];

    // left + right = result
    // if result < target, increase left point index 
    // if result > target, decrease right point index 
    if(left + right < target && i < sortedArray.length){
        i++;
    } else if(left + right > target && j >= 0){
        j--;
    } else if(left + right === target){
        return [left, right];
    } else {
        return [];
    }


}

console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));
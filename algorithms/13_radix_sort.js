// *************** Radix Sort ******************************
// a sort that doesn't compare number

// Helper functino
// look for the value of a certain digit first

function getDigit(num, place){
    var numToString = num.toString();
    var flippedString = [];
    for(let i = numToString.length -1 ; i >= 0; i--){
        flippedString.push(numToString[i]);
    }
    return flippedString[place];
}

// console.log(getDigit(12345, 2));

function digitCount(num){
    var numToString = (Math.abs(num).toString());
    return numToString.length;
}

// console.log(digitCount(-1234));

function mostigit(nums){
    var max = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
    }
    return digitCount(max);
}

// console.log(mostigit([1,2,22,45,90,999,1111]));

function radixSort(nums){
    let maxDigit = mostigit(nums);
    var i = 0;
    var newNums = [...nums]
    while(i < maxDigit){
        var buckets = [[], [], [], [], [], [], [], [], [], []];
        for(let n = 0; n < newNums.length; n++){
            let k = getDigit(newNums[n], i);
            if(k !== undefined){
                buckets[k].push(newNums[n]);
            } else {
                buckets[0].push(newNums[n]);
            }
        }

        var newNums = [];
        for(let j = 0; j < buckets.length; j++){
            newNums.push(...buckets[j]);
        }
        i++
    }
    return newNums;
}

console.log(radixSort([1,10,9,2190,3,45,90,111,329,71,19999]))



var buckets = [[], [], [], [], [], [], [], [], [], []];
// can change to
let bucket2 = Array.from({length: 10}, () => []);






// *************** Key for helper function

function getDigit1(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount1(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// This is just a note from an algorithm lecture
// takes 2 arrays
// return true if each value * itself = the second array




// O(N**2)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr2.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        //trying to find if arr1[i] * 2 are in arr2
        if (correctIndex === -1) {
            return false;
            //indexOf will return -1 if it can't be found
        }
        arr2.splice(correctIndex, 1);
        //if corresponsed number was found, cut it out from arr2
    }
    return true;
    //all number are found
}



// O(N)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let arr1IndexCount = {};
    let arr2IndexCount = {};
    for(let value of arr1) {
        arr1IndexCount[value] = (arr1IndexCount[value] || 0) + 1;
        // if arr1IndexCount[value] is not in the object, it will return null and arr1IndexCount[value] will be 0 + 1
        // otherwise its value will +1
    }
    for(let value of arr2) {
        arr2IndexCount[value] = (arr2IndexCount[value] || 0) + 1;
    }

    for(let key in arr1IndexCount){
        // arr1's object key ^ 2 to see if it's in arr2's onject key
        if(!(key ** 2 in arr2IndexCount)) {
            // if arr1's key ^ 2 not in arr2's key
            return false; 
        }

        //change the value of 2 object, match = true
        if(arr2IndexCount[key ** 2] !== arr1IndexCount[key]) {
            return false; 
        }
    }
    return true;
}

// console.log(same([2,3,4], [4,9,16]));
// console.log(same([2,3,4], [9,4,16]));
// console.log(same([2,1,4], [4,9,16]));
// console.log(same([2,3], [4,9,16]));


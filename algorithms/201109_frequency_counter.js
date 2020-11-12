// This is just a note from an algorithm lecture
// takes 2 arrays
// return true if each value * itself = the second array




// ******************** O(N**2) ********************
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



// ******************** O(N) ********************
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


// ******************** Challenge - Anagrams ********************
function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let CharOfStr1 = {};
    let CharOfStr2 = {};

    for(var i = 0; i < str1.length; i++){

        CharOfStr1[str1[i]] = (CharOfStr1[str1[i]] || 0) + 1;

        CharOfStr2[str2[i]] = (CharOfStr2[str2[i]] || 0) + 1;
    }
    console.log(CharOfStr1);
    console.log(CharOfStr2);

    for(let key in CharOfStr1) {
        if(!(key in CharOfStr2)){
            return false;
        }

        if(CharOfStr1[key] !== CharOfStr2[key]){
            return false;
        }
    }
    return true;
}
// console.log(validAnagram('anagrams', 'nagaamm'));
console.log(validAnagram('aaz', 'zza'));



// ******************** Challenge - Anagrams - KEY ********************
function Anagrams(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    var Str1CharList = {};

    for(let char in str1) {
        // if char is in Str1CharList + 1, if not create one
        Str1CharList[char] ? Str1CharList[char] += 1 : Str1CharList[char] = 1;
    }

    for(let char in str2) {
        if(!Str1CharList[char]) {
            //if char is str2 are not in Str1CharList
            return false;
        } else {
            Str1CharList[char] -= 1;
        }
    }
    return true;
}

// console.log(Anagrams('anagrams', 'anagrams'));
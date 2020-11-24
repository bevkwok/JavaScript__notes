// Frequency Counter - areThereDuplicates
// find if there are duplicates in all variable

function areThereDuplicates1() { //Frequency Counter method
    let arr = Array.from(arguments);
    let count = {};
    for(var i = 0; i < arr.length; i++){
        if(!(count[arr[i]])){
            count[arr[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}




function areThereDuplicates2() { //Multiple Pointers

}

console.log(areThereDuplicates2(1,2,3,2,4,5));
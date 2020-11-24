// Frequency Counter - sameFrequency
//Given 2 positive integers, find out if they have same frequency of index.

function sameFrequency(num1, num2){

    let num1Str = num1.toString();
    let num2Str = num2.toString();
    let num1Count = {};

    if(num1Str.length !== num2Str.length){
        return false;
    }

    for(let i = 0; i < num1Str.length; i++) {
        num1Count[num1Str[i]] ? num1Count[num1Str[i]] += 1 : num1Count[num1Str[i]] = 1;
    }

    for(let j = 0; j < num2Str.length; j++) {
        if(!(num1Count[num2Str[j]])) {
            
            return false;
        } else {
            num1Count[num2Str[j]]--;
        }
    }
    return true;
}

// console.log(sameFrequency(3589578, 5879385));


// Similar key 
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

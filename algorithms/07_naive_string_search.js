//search substring inside string 11/28/2020

// *************** My Key ***************


function NaiveString(substring, string){
    let count = 0;
    let i = 0;
    let j = 0;
    let realcount = 0;
    while(i < string.length){
        if(string[i] === substring[j]){
            count++;
            i++;
            j++;
            if(count === substring.length){
                realcount++;
                count = 0;
            }
        } else {
            i++;
            j = 0;
            count = 0;
        }
    }
    return realcount;
}

// *************** Other Key ***************
function NaiveString2(short, long) {
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(long[i + j] !== short[j]){
                break;
            }
            if(j === short.length - 1){
                count++
            }
        }
    }
    return count;
}


console.log(NaiveString2("lo","lorie loled"));
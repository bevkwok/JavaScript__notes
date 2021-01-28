function palindromeNumber(x){
    let xStr = x.toString();
    let midpoint = Math.ceil(xStr.length / 2);
    let j = xStr.length - 1;
    let i = 0;
    let match = true;
    while(j >= midpoint && i <= midpoint){
        if(xStr[j] !== xStr[i]){
            match = false;
        }
        j--;
        i++
    }
    return match;
}
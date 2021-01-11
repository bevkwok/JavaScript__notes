function ReverseInteger(x){
    let negative = false;
    if(x < 0){
        x = x * -1;
        negative = true;
    }
    let xStr = x.toString();
    let result = '';
    for(let num of xStr){
        result = num + result;
    }
    let final = parseInt(result);
    if(final > (2**31 - 1)) return 0;
    return negative ? final * -1 : final;
}

console.log(ReverseInteger(123));

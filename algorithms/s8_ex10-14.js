//recursion practice 11/19/2020

//write a function which accepts a base and an exponent. 
//retun the power of the base to the exponent
//like Math.pow()

function power(base, exponent) {
    if(exponent === 0) return 1;
    let x = base;
    return x * power(base, exponent -1);
}
// console.log(power(2, 4));





//return factorial of that number

function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num - 1);
}
// console.log(factorial(7));





//takes an array and return product of all num

function productOfArray(arr){
    if(arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}
// console.log(productOfArray([1,2,3,10]));






//accepts a number and adds from 0 to the number

function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num - 1);
}
// console.log(recursiveRange(6));





//accepts a number and return the Nth number in the fibonacci sequence

function fib(num){
    
    let arr = [1,1];

    function helper(input){
        if(input === 2) return 1;
        if(input > 2){
            arr.push(arr[arr.length-1] + arr[arr.length-2]);
        }
        console.log(arr);
        helper(input-1);
    }
    helper(num);

    return arr[num - 1];
}

console.log(fib(28));
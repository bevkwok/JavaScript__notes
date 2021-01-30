function rotLeft(a, d) {
    let count = 0;
    while(count !== d){
        let newEnd = a.shift();
        a.push(newEnd);
        count++
    }
    return a;
}
rotLeft([1,2,3,4,5], 5);
console.log(rotLeft([1,2,3,4,5], 5));

// https://www.youtube.com/watch?v=7zEkLFE_D4Y
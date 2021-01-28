
function hourglassSum(arr) {
    let allSum = [];
    let i = 0;
    let j = 0;
    while(i+2 < arr.length && j+2 < arr.length){
        const topHourglass = arr[i][j] + arr[i][j+1] + arr[i][j+2];
        const midHourglass = arr[i+1][j+1];
        const botHourglass = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
        allSum.push(topHourglass + midHourglass + botHourglass);
        if(j+2 < arr.length -1){
            j++;
        } else {
            i++;
            j = 0;
            console.log('add i');
        }
    }
    console.log(allSum);
    return Math.max(...allSum);
}

const arr = 
[
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

console.log(hourglassSum(arr));
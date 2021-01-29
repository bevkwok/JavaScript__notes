////// unsuccessful attempt


function minimumBribes(q) {
    let bribeCount = {};
    let bribe = 0;
    for(let i = 0; i < q.length; i++){
        if(q[i] > i + 1 ){
            bribeCount[q[i]] = q[i] - i - 1;
        } else if(q[i] > q[i+1]) {
            !bribeCount[q[i]] ? bribeCount[q[i]] = 1 : bribeCount[q[i]]++;
        }
    }
    for(const b of Object.values(bribeCount)) {
        if( b >= 3 ) {
            console.log('Too chaotic')
            return 'Too chaotic';
        } else {
            bribe += b;
        }
    }
    console.log(bribe);
    return bribe;
}
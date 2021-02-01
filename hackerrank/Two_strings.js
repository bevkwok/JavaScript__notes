function twoStrings(s1, s2) {
    let trackS1 = {};
    for(const char1 of s1){
        trackS1[char1] ? trackS1[char1]++ : trackS1[char1] = 1; 
    }
    for(const char2 of s2) {
        if(trackS1[char2]) {
            return "YES";
        } 
    }
    return "NO";
}

console.log(twoStrings('and', 'art'));
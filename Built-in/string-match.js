const paragraph = 'apple is a';
const onlyAs = paragraph.match(/a/g);

console.log(onlyAs);

// if non parameter in match() => [""]
// /g = the whole string
// without /g match() will return the first complete match
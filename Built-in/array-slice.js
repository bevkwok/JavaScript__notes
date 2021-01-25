const colors = ['red', 'yellow', 'green', 'blue', 'pink'];

// want everything start at colors[2];
console.log(colors.slice(2)); 
// [ 'green', 'blue', 'pink' ]

// want everything start at colors[2] and ends before colors[4];
console.log(colors.slice(2, 4));
// [ 'green', 'blue' ]

// copy the entire array
console.log(colors.slice(0));

// the last item in the array
console.log(colors.slice(colors.length - 1));
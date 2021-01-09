// What is binary heap
// it's similar to BST, at most 2 children, not left or right order
// left children are filled out first (always compacted)

// MaxBinaryHeap - parent nodes larger then child
// MinBinaryHeap - parent nodes smaller then child


// use cases
// Priority Queues - very common
// graph traversal

// can use array to represent a heap
// to find the left child - 2(idx) + 1
// to find the right child - 2(idx) + 2
// to find parents (idx - 1)/2 <= floor this

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(value){
        // put value in first
        this.values.push(value);

        var index = this.values.length - 1;

        while(index > 0){
            var parentIndex = Math.floor((index - 1)/2);
            if(value > this.values[parentIndex]){
                [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            }
            index = parentIndex;
        }
        return this.values;
    }

    // remove = ExtractMax / ExtractMin for MinBinaryHeap
    extractMac(){
        var lastIdx = this.values.length - 1;
        [this.values[0], this.values[lastIdx]] = [this.values[lastIdx], this.values[0]];
        var max = this.values.pop();
        if(this.values.length <= 0) return undefined;
        var currentIdx = 0;
        var current = this.values[currentIdx];
        while(true){
            var leftChildIdx = (currentIdx * 2) + 1;
            var rightChildIdx = (currentIdx * 2) + 2;
            var leftChild;
            var rightChild;
            var swap = null;
            console.log("inside while loop")
            if(leftChildIdx < this.values.length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > current){
                    swap = leftChildIdx;
                }
                console.log("in side left check " + leftChild);
            }
            if(rightChildIdx < this.values.length){
                rightChild = this.values[rightChildIdx];
                if(
                (rightChild > current && swap === null) || 
                (swap !== null && rightChild > leftChild)
                )
                    {
                        swap = rightChildIdx;
                    }
                    console.log("in side right check" + rightChild)
            }
            if(swap === null) break;
            [this.values[currentIdx], this.values[swap]] = [this.values[swap], this.values[currentIdx]]
            console.log("swapped")
            currentIdx = swap;
        }
        return max;
    }

}



var mbh = new MaxBinaryHeap();
console.log(mbh.insert(27));
console.log(mbh.insert(18));
console.log(mbh.insert(55));
console.log(mbh.insert(1));
console.log(mbh.insert(41));
console.log(mbh.insert(199));
console.log(mbh.insert(33));
console.log(mbh.insert(12));
console.log(mbh.extractMac());
console.log(mbh.extractMac());







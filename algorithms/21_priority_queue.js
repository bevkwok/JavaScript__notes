    // What is Priority Queue?
    // A data structure where elements with higher priorities are served before elements with lower priorities.
    // Priority Queue is an abstract concept, don't have to do it with heap all the time

    // basically is like a MinBinaryHeap

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}


class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);

        let currentIdx = this.values.length - 1;
        while(true){
            let parentIdx = Math.floor((currentIdx - 1)/2);
            if(parentIdx >= 0){
                let parent = this.values[parentIdx];
                if(newNode.priority < parent.priority){
                    [this.values[currentIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIdx]];
                    currentIdx = parentIdx;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        return this.values;
    }

    dequeue(){
        let lastIdx = this.values.length - 1;
        [this.values[0], this.values[lastIdx]] = [this.values[lastIdx], this.values[0]];
        let oldRoot = this.values.pop();
        let currentIdx = 0;
        while(true){
        let current = this.values[currentIdx];
        let leftchildIdx = (currentIdx*2) + 1;
        let rightchildIdx = (currentIdx*2) + 2;
        let swap = null;
            if(leftchildIdx < lastIdx - 1){
                console.log("L child < length");
                let leftchild = this.values[leftchildIdx];
                console.log(current.priority + " = C  L = " + leftchild.priority);
                if(current.priority > leftchild.priority){
                    console.log("L child value < current");
                    swap = leftchildIdx;
                }
                if(rightchildIdx < lastIdx - 1){
                    console.log("R child < length");
                    let rightchild = this.values[rightchildIdx];
                    console.log(current.priority + " = C  R = " + rightchild.priority);

                    if(rightchild.priority < leftchild.priority && current.priority > rightchild.priority){
                        console.log("R child value < current");
                        swap = rightchildIdx;
                    }
                }
            }
            if(swap ===  null) break;
            [this.values[currentIdx], this.values[swap]] = [this.values[swap], this.values[currentIdx]];
            currentIdx = swap;
        }
        console.log(this.values);
        return oldRoot;
    }
}

let pq = new PriorityQueue();
console.log(pq.enqueue("fourth", 7));
console.log(pq.enqueue("third", 3));
console.log(pq.enqueue("first", 10));
console.log(pq.enqueue("first", 8));
console.log(pq.enqueue("sec", 2));
console.log(pq.enqueue("fourth", 1));
console.log(pq.enqueue("sec", 5));
console.log(pq.dequeue());
console.log(pq.dequeue());






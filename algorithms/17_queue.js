// What is queue?
// like stacks, also a data structure with insertion and removal
// but it's first in first out
// Use cases
// uploading and downloading
// waiting to get into a game

// enq = add something, deq = remove something

// Array implementation
// push with shift
var q = [];
q.push("first");
q.push("second");
q.push("third");
console.log(q);
q.shift();
console.log(q);

// unshift with pop
var qq = [];
qq.unshift("first");
qq.unshift("second");
qq.unshift("third");
console.log(qq);
qq.pop();
console.log(qq);


// Link List implementation
// 2 classes - Queue and Node
// Queue needs first, last and size
// Node(value) needs value and next
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){ // push
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    
    dequeue(){ // unshift
        if(!this.first) return null;
        let oldHead = this.first;
        if(this.size === 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return oldHead.value;
    }

    //or 
    unshift(){

    }

    pop(){

    }
}
    
var theQueue = new Queue();
console.log(theQueue.enqueue(1));
console.log(theQueue.enqueue(2));
console.log(theQueue.enqueue(3));
console.log(theQueue);
console.log(theQueue.dequeue());
console.log(theQueue);

// insertion and removal = O(1);
// searching and access = O(N);

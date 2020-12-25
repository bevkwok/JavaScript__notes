// What is stack?
// A LIFO data structure 
// LIFO = last in, first out

// A data structure that manage what happens when functions are invoked are called call-stack

// like anytime a function is invoke it is pushed on the top of the call stack

// return = pop for call stack

// Where stacks are used
// undo / redo
// managing function invocations
// history object in browser

// Array implementaion of stack structure
var stack = []
stack.push("google");
stack.push("instagram");
stack.push("youtube")
stack.pop();
// unshift to add, shift to remove
stack.unshift("create new file");
stack.unshift("resized new file");
stack.shift();


// Link list implementaion, only need push and pop.
// but really is using shift(pop) and unshift(push)
// need to begin with 2 classes. 
// 1st class - Stack - () - first, last and size
// 2st class - Node - (value) - value, next
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }

    push(val){ // = unshift
        let first = new Node(val);
        if(!this.first){
            this.first = first;
            this.last = first;
        } else {
            let nextOfFirst = this.first;
            this.first = first;
            first.next = nextOfFirst;
        }
        // this.size++;
        return ++this.size;
    }

    pop(){ // = shift
        if(!this.first) return null;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            let newFirst = this.first.next;
            this.first = newFirst;
        }
        this.size--;
        return this;
    }
}

// insertion and removal = O(1);
// searching and access = O(N);


let list = new Stack();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list);
console.log(list.pop());
console.log(list);



// What is linked list?
// list of ordered data, contains head, tail and length property
// consist of node and node has a value and a pointer to next node or null
// can't access randomly

// Since linked list is just a collect of node
// start with creating a node
// data - val
// reference to next node - next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var first = new Node("hi");
first.next = new Node("there");
first.next.next = new Node("how"); // bad way to referernce

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adding at the end of the list
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // removing at the end of the list
    pop(){
        //if nothing, return 
        if(this.length === 0){ return "this list is empty"}
        let temp = this.head;
        let newTail = temp;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            console.log(temp);
            return temp;
        }

        while(temp.next){
            newTail = temp;
            temp = temp.next;

        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        console.log(temp);
        return newTail;
    }

    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next;
        console.log(oldHead);
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val){
        let newHead = new Node(val);

        if(!this.head){
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index){ //get the node by the index

        if(index < 0 || index > this.length) return null;

        let theNode = this.head;

        if(index === 0){
            return theNode;
        }

        while(index > 0){
            theNode = theNode.next;
            index--;
        }
        console.log(theNode);
        return theNode;
    }

    set(index, val){ //change value of a node

        let OldNode = this.get(index);

        if(OldNode){
            OldNode.val = val;
            return true;
        }
        return false
    }

    insert(index, val){
        let newNode = new Node(val);
        if(index > this.length || index < 0){
            return false;
        }
        if(index === 0) { return !!this.unshift(val); }
        if(index === this.length) { return !!this.push(val); }

        let preNewNode = this.get(index - 1);
        let postNewNode = preNewNode.next;

        preNewNode.next = newNode;
        newNode.next = postNewNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index > this.length - 1 || index < 0){
            return false;
        }
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        let perNode = this.get(index - 1);
        perNode.next = this.get(index + 1);
        this.length--;
        return true;
    }

    reverse(){
        if(!this.head) return undefined;
        let theEnd = this.head;
        let theStart = this.tail;
        let next;
        let prev;
        let index = this.length - 1;
        while(index > 0){
            
        }

    }
}

let list = new SinglyLinkedList();
list.push("hi");
list.push("there");
list.push("3");
list.push("4");
list.remove(0);
console.log(list);
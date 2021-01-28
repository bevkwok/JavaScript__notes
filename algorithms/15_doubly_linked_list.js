// What is double link list?
// Almost like singly linked lists but with another pointer
// all node points to the previous and the next node

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            newNode.next = null;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let oldTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }

    shift(){ // removing node from beginning
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--
        return oldHead;
    }

    unshift(val){// add node to the beginning
        let newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = newHead;
        } else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return newHead;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let midpoint = Math.floor(this.length / 2);
        let count = 0;
        let theNode = this.head;
        let countFromBack = this.length - 1;
        let NodeFromBack = this.tail;

        if(index <= midpoint){
            while(index !== count){
                theNode = theNode.next;
                count++;
            }
            return theNode;
        } else {
            while(index !== countFromBack)
            {
                NodeFromBack = NodeFromBack.prev;
                countFromBack--;
            }
            return NodeFromBack;
        }
    }

    set(index, val){
        let changingNode = this.get(index);
        if(changingNode != null || changingNode != undefined){
            changingNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        let beforeNewNode = this.get(index - 1);
        let newNode = new Node(val);
        if(beforeNewNode != null || beforeNewNode != undefined){
            if(index === 0){
                this.unshift(val);
            } else if(index === this.length) {
                this.push(val);
            } else {
                let afterNewNode = beforeNewNode.next;
                afterNewNode.prev = newNode;
                newNode.next = afterNewNode;
                beforeNewNode.next = newNode;
                newNode.prev = beforeNewNode;
            }
            this.length++;
            return true;
        }
        return false;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0){
            this.shift();
        } else if (index === this.length - 1){
            this.pop();
        } else {
            let removing = this.get(index);
            let beforeRemoving = removing.prev;
            let afterRemoving = removing.next;
            removing.prev = null;
            removing.next = null;
            beforeRemoving.next = afterRemoving;
            afterRemoving.prev = beforeRemoving;
        }
        this.length--;
        return true;
    }
}

let list = new DoublyLinkList();
console.log(list.push("Apple"));
console.log(list.push("Ben"));
console.log(list.push("Cat"));
console.log(list.push("Dog"));
console.log(list.push("Egg"));
console.log(list.push("Fish"));
console.log(list.push("Ham"));
console.log(list.push("Ice"));
console.log(list.push("Juice"));
console.log(list.remove(8));
console.log(list);


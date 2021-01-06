// 4 approaches for tree traversal

// 2 ways

// Breadth-first Search 
// - working across (left to right)

// Depth-first Search 
// - working down (up and down)
// - InOrder / PreOrder / PostOrder

// When to use BFS
// for keeping track of lots of nodes

// When to use DFS
// for keeping track of fewer nodes



// BFS (Breadth-first Search)
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
        this.length = 0;
    }
    
    enqueue(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequene(){
        if(!this.first) return undefined;
        var temp = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return temp.value;
    }
}

class Node1{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node1(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } 
        var temp = this.root;
        while(true){
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left
            } else {
                if(temp.right === null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    breadthFirthSearch(){
        var result = [];
        var queue = [];
        var node = this.root;
        queue.push(node);

        while(queue.length){ // = true if length > 0
            node = queue.shift(); // FIFO
            result.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.left) queue.push(node.right);
        }
        return result;
    }

    DFSPreOrder(){
        var result = [];
        var current = this.root;
        function traverse(Node1){
            result.push(Node1.value);
            if(Node1.left){
                traverse(Node1.left);
            }
            if(Node1.right){
                traverse(Node1.right);
            }
        }
        traverse(current);
        return result;
    }

    DFSPostOrder(){
        var result = [];
        var current = this.root;
        function traverse(Node1){
            if(Node1.left){
                traverse(Node1.left);
            }
            if(Node1.right){
                traverse(Node1.right);
            }
            result.push(Node1.value);
        }
        traverse(current);
        return result;
    }

    DFSInOrder(){
        var result = [];
        var current = this.root;
        function traverse(Node1){
            if(Node1.left){
                traverse(Node1.left);
            }
            result.push(Node1.value);
            if(Node1.right){
                traverse(Node1.right);
            }
        }
        traverse(current);
        return result;
    }

    //My incorrect attempt

    // breadthFirthSearch(){
    //     if(!this.root) return undefined;
    //     var current = this.root;
    //     var newQueue = new Queue();
    //     newQueue = newQueue.enqueue(current.value);
    //     if(this.length === 1) return newQueue;
    //     while(current.left !== null & current.right !== null){
    //         newQueue = newQueue.enqueue(breadthFirthSearch(current.left).value);
    //         newQueue = newQueue.enqueue(breadthFirthSearch(current.right).value);
    //     }
    //     return newQueue;
    // }
}


var newTree = new BinarySearchTree;
console.log(newTree.insert(10));
console.log(newTree.insert(6));
console.log(newTree.insert(15));
console.log(newTree.insert(3));
console.log(newTree.insert(8));
console.log(newTree.insert(20));
console.log(newTree.DFSInOrder());





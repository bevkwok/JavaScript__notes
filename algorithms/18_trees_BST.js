// What is tree
// a data structure that consists of nodes in a parent/child relationship

// trees vs lists
// trees = nonlinear / one root only 
// lists = linear

// root = top node in tree (one)
// child = a node directly connected to another node when moving away from the root.
// sibilings = a group of nodes with the same parent
// leap = node with no children
// edge = the connection between one node and another

// Examples of trees
// HTML DOM
// Network Routing
// Abstract Syntax Tree
// folder in OS

// ** mainly about binary search trees **
// - Binary tree (at most 2 children)
// - Binary search tree (kept in an order)
// bst usually store data that is sortable
// item that are less then the node are on the left side. greater are on the right side.

// begin with 2 classes
// 1st class - BinarySearchTree - () - root = null;
// 2nr class - Node - (value) - value, left & right = null; 


// Big O of BST
// everytime the number of node double, it takes one more time to search a node.
// insertion - O(log n) 
// searching - O(log n) 
// O(log n) is for best case and average case
// for the worst case. it's not guaranteed
// WHY? * Not guaranteed
// BECAUSE a tree can look like a link list




class Node{
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


    // insert
    // first, check if there is a root
    // create one if not, compare if yes
    // check if there is left and right


    insert(val){
        var newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(val < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val){
        if(!this.root) return undefined;
        let temp = this.root;
        let found = false
        let target;
        while(temp !== null && !found){
            if(val < temp.value){
                temp = temp.left;
            } else if(val === temp.value){
                target = temp;
                found = true;
            } else {
                temp = temp.right;
            }
        }
        if(!found) return undefined;
        return target;
    }

}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(9);
console.log(tree);

tree.insert(5);
console.log(tree);

tree.insert(11);
console.log(tree);

console.log(tree.find(2));



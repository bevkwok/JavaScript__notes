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
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(12);
tree.root.left = new Node(8);


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(value){
        this.root = new Node(value);
        this.count = 1;
    }

    size(){
        return this.count;
    }

    insert(value){
        this.count++;
        let newNode  = new Node(value);
        const searchTree = node =>{
            if(value < node.value){

                if(!node.left){
                    node.left = newNode;
                }else{
                    searchTree(node.left);
                }

            }else if(value > node.value){
                if(!node.right){
                    node.right = newNode;
                }else{
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root);
    }

    min(){

        let currNode = this.root;
        while(currNode.left){
            currNode = currNode.left;
        }

        return currNode.value;

    }

    max(){

        let currNode = this.root;
        while(currNode.right){
            currNode = currNode.right
        }

        return currNode.value;

    }

    contains(value){

        let currNode = this.root;
        while(currNode){
            if(currNode.value === value ){
                return true
            }
            if(value < currNode){
                currNode = currNode.left;
            }else{
                currNode = currNode.right;
            }
        }

        return false
    }

    dfsInOrder(){
        let result = [];

        const traverse = (node) =>{
            if(node.left){
                traverse(node.left)
            }
            result.push(node.value);
            if(node.right){
                traverse(node.right);
            }
        }

        traverse(this.root);

        return result;
    }
    
    dfsPreOrder(){
        let result = [];

        const traverse = node =>{
            result.push(node.value);
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right);
            }

        }

        traverse(this.root);
        return result;
    }

    dfsPostOrder(){
        let result = [];
        if(node.left){
            traverse(node.left)
        }
        if(node.right){
            traverse(node.right);
        }

        result.push(node.value);
        traverse(this.root);

        return result;
    }

    bfs(){
        let result = [];
        let queue = [];
        queue.push(this.root);

        while(queue.length !== 0){
            let currNode = queue.shift()
            result.push(currNode.value);
            if(currNode.left){
                queue.push(currNode.left)
            }

            if(currNode.right){
                queue.push(currNode.right);
            }
        }

        return result;
    }


}

const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst.bfs())

class LinkedNode {
    constructor(data){
        this.data= data;
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }

    size(){
        let count = 0;
        let node = this.head
        while (node){
            count ++ 
            node = node.next
        }
        return count;
    }

    clear(){
        this.head = null
        return true
    }

    getLast(){
        let node = this.head
        while (node){
            if(!node.next){
                return node.data
            }
        }
        
    }
    getFirst(){
        return this.head.data
    }
}

let node1 = new LinkedNode(1);
let node2 = new LinkedNode(2)
let node3 = new LinkedNode(3)

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1)

console.log(list.getFirst())



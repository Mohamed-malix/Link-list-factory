import {Node} from "./Node.js"

class NodeList {
    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    
    getHead() {
        return this.head;
    }

    getSize() {
        return this.length;
    }

    add(nextNode) {
        let node= new Node(nextNode);

        if(!this.head){
            this.head=node;
        }else{
            while(this.head.next){

            }
        }

        this.length++;
    }
}


const nodeList= new NodeList();
const node1= new Node("A");
const node2= new Node("B");

nodeList.add(node1);
node1.next=node2;
console.log(nodeList, "test test");
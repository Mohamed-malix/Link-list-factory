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
            let temp= this.head;
            while(temp.next!=null){
                temp= temp.next;
            }
            temp.next=node;
        }

        this.length++;
    }

    insertAfter(insNode, afNode) {
        let temp =this.head;
        while(temp.next!=null && !temp.value==afNode){
            temp= temp.next;
        }
        
        if(temp !=null){
            temp.next= new Node(insNode, temp.next);
        }
    }
}


const nodeList= new NodeList();
nodeList.add("A");
nodeList.add("B");
nodeList.insertAfter("C", "A");

console.log(nodeList, "first test");
console.log(nodeList.getSize(), "second test");
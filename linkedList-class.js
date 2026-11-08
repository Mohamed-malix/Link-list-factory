import {Node} from "./Node.js"

class NodeList {
    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    
    getHead() {
        return this.length>0 ? this.head:undefined;
    }

    getTail() {
        return this.length>0 ? this.tail:undefined;
    }

    getSize() {
        return this.length;
    }

    append(nextNode) {
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

    prepend(newNode) {
        const temp= this.head;
        this.head= new Node(newNode);
        this.head.next=temp;

        this.length++;
    }

    insertAfter(insNode, afNode) {
        let temp = this.head;
        while(temp!=null && temp.value!=afNode) {
            temp= temp.next;
        }

        if(temp!=null){
            temp.next= new Node(insNode, temp.next);
        }

        this.length++;
    }

    at(index) {
        let temp = this.head;
        for(let i=0; i<this.length; i++) {
            if(i==index){
                return temp;
            }
            temp=temp.next;
        }

        return undefined;
    }
}


const nodeList= new NodeList();
nodeList.append("A");
nodeList.append("B");
nodeList.insertAfter("C", "A");
nodeList.append("D");

console.log(nodeList, "first test");
console.log(nodeList.at(3), "second test"); 
console.log(nodeList.getSize(), "second test"); 
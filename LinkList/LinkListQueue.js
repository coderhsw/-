class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkListQueue {
    constructor(){
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.size = 0;
    }

    enterQueue(value){
        if(this.tail.value === null){
            this.tail = new Node(value, null);
            this.head = this.tail;
        }else{
            this.tail.next = new Node(value, null);
            this.tail = this.tail.next;
        }
        this.size++;
    }

    leaveQueue(){
        if(this.head.value === null){
            throw Error('queue is empty')
        }

        let retNode = this.head;
        this.head = this.head.next;
        retNode = null;
        if(this.head.value === null){
            this.tail = null;
        }
        this.size--;

        return retNode;
    }

    getHeader(){
        return this.head;
    }

    getLength(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }

    toString(){
        let string = '';

        let cur = this.head;
        for (let i = 0; i < this.size; i++) {
            string += `${cur.value}->`
            cur = cur.next;
        }
        string += 'null';

        return string;
    }
}

const queue = new LinkListQueue();

for (let i = 0; i < 5; i++) {
    queue.enterQueue(i);    
}
console.log(queue.toString());

queue.leaveQueue();
console.log(queue.toString());
console.log(queue.getLength());
class Queue{
    constructor(){
        this.queue = [];
    }

    getSize(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    enQueue(value){
        this.queue.push(value);
    }

    deQueue(){
        return this.queue.shift();
    }

    getHeader(){
        return this.queue[0];
    }

    toString(){
        let string = '';
        string += `Queue: front [${this.queue.join()}] tail`

        return string;
    }
}

const queue = new Queue();

for (let i = 0; i < 6; i++) {
    queue.enQueue(i);
}
console.log(queue.toString());
class LoopQueue {
    constructor(length) {
        // 循环队列需要浪费一个数组的空间，所以需要 +1 数组长度
        this.queue = new Array(length + 1);
        // 队列头指针
        this.front = 0;
        // 队列尾指针
        this.tail = 0;
        // 队列长度
        this.size = 0;
    }

    enQueue(value) {
        if ((this.tail + 1) % this.queue.length === this.front) {
            this.resize(this.queue.length * 2 + 1);
        }

        this.queue[this.tail] = value;
        this.tail = (this.tail + 1) % this.queue.length;
        this.size++;
    }

    deQueue(){
        const ret = this.queue[this.front];
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.queue.length;
        this.size--;
        
        if(this.size <= this.queue.length / 4){
            this.resize(this.queue.length / 2 + 1);
        }

        return ret;
    }

    isEmpty(){
        return this.size === 0;
    }

    getHeader(){
        return this.queue[this.front];
    }

    getLength(){
        return this.size;
    }

    resize(length){
        const queue = new Array(length + 1);
        for (let i = this.front; i !== this.tail; i = (i + 1) % this.queue.length) {
            queue[i] = this.queue[i];
        }

        this.queue = queue
    }

    toString(){
        let string = '';

        string += 'LoopQueue: front[';
        for(let i = 0; i < this.size; i++){
            string += `${this.queue[i + this.front]}`
            if((i + this.front + 1) % this.queue.length !== this.tail){
                string += ', '
            }
        }
        string += '] tail';

        return string;
    }
}

const loopQueue = new LoopQueue(5);

for (let i = 0; i < 8; i++) {
    loopQueue.enQueue(i)
}

console.log(loopQueue.toString());

loopQueue.deQueue();
loopQueue.deQueue();

console.log(loopQueue.toString());
console.log(loopQueue.getLength());
console.log(loopQueue.getHeader());

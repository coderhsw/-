class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        this.dummyNode = new Node(null, null);
        this.size = 0;
    }

    addNode(v, index) {
        this.checkIndex(index);

        let prev = this.dummyNode;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }
        prev.next = new Node(v, prev.next);
        this.size++;

        return prev.next.value;
    }

    insertNode(v, index) {
        return this.addNode(v, index);
    }

    addToFirst(v) {
        return this.addNode(v, 0);
    }

    addToLast(v) {
        return this.addNode(v, this.size - 1);
    }

    removeNode(index) {
        this.checkIndex(index);

        let prev = this.dummyNode;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }
        let delNode = prev.next;
        prev.next = delNode.next;
        delNode.next = null;
        this.size--;

        return delNode.value;
    }

    removeFirst(){
        return this.removeNode(0);
    }

    get(index) {
        this.checkIndex(index);

        let cur = this.dummyNode.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.value;
    }

    getFirst() {
        return this.get(0);
    }

    getLast() {
        return this.get(this.size - 1);
    }

    set(v, index){
        this.checkIndex(index);

        let cur = this.dummyNode;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.value = v;

        return cur.value;
    }

    contain(v){
        let cur = this.dummyNode;
        for (let i = 0; i < index; i++) {
            if(cur && cur.value === v) return true
            cur = cur.next;
        }
        return false;
    }

    checkIndex(index) {
        if (index < 0 || index > this.size) {
            throw Error('Index Error');
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    toString(){
        let cur = this.dummyNode.next;
        let string = '';

        while(cur){
            string += `${cur.value}->`;
            cur = cur.next;
        }
        string += 'null'

        return string
    }
}

const list = new LinkList();
for(let i = 0; i< 5; i++){
    list.addToFirst(i);
    // list.toString()
    // console.log(list.toString());
}

list.insertNode(666,2)
// console.log(list.toString());

module.exports = LinkList;

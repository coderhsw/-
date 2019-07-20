const LinkList = require('./LinkList');

class LinkListStack extends LinkList {
    constructor() {
        super();
    }

    enterStack(value) {
        super.addToFirst(value);
    }

    leaveStack() {
        return super.removeFirst();
    }

    peek() {
        return super.getFirst();
    }

    getCount() {
        return super.getSize();
    }

    isEmpty() {
        return super.isEmpty();
    }

    toString() {
        let string = '';
        let cur = this.dummyNode.next;
        for (let i = 0; i < this.size; i++) {
            string += `${cur.value}->`;
            cur = cur.next;
        }
        string += 'null';

        return string;
    }
}

const stack = new LinkListStack();

for (let i = 0; i < 5; i++) {
    stack.enterStack(i);
}
console.log(stack.toString());

stack.leaveStack()
console.log(stack.toString());
console.log(stack.peek());

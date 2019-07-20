const LinkList = require('./LinkList');

const list = new LinkList();
for (let i = 0; i < 5; i++) {
    list.addToFirst(i);
}

console.log(list.toString());

function reverse(list) {
    let prev = null;
    let curr = list.dummyNode.next;

    while (curr !== null) {
        const tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }

    return prev;
}

const newList = reverse(list);

function toString(head) {
    let cur = head;
    let string = '';

    while (cur) {
        string += `${cur.value}->`;
        cur = cur.next;
    }
    string += 'null';

    return string;
}

console.log(toString(newList));

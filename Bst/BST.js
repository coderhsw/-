class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	addNode(value) {
		this.root = this._addNode(this.root, value);
	}

	_addNode(root, value) {
		if (root === null) {
			this.size++;
			return new Node(value);
		}

		if (value < root.value) {
			root.left = this._addNode(root.left, value);
		} else if (value > root.value) {
			root.right = this._addNode(root.right, value);
		}

		return root;
	}

	contain(value) {
		this._contain(this.root, value);
	}

	_contain(root, value) {
		if (root === null) {
			return false;
		}

		if (root.value === value) {
			return true;
		}

		if (value < root.value) {
			return this._contain(root.left, value);
		} else {
			return this._contain(root.right, value);
		}
	}

	preOrder() {
		this._preOrder(this.root);
	}

	// 前序遍历
	_preOrder(root) {
		if (root === null) {
			return null;
		}

		console.log(root.value);
		this._preOrder(root.left);
		this._preOrder(root.right);
	}

	// 中序遍历
	inOrder() {
		this._inOrder(this.root);
	}

	_inOrder(root) {
		if (root === null) {
			return null;
		}

		this._inOrder(root.left);
		console.log(root.value);
		this._inOrder(root.right);
	}

	// 后序遍历
	postOrder() {
		this._postOrder(this.root);
	}

	_postOrder(root) {
		if (root === null) {
			return null;
		}

		this._postOrder(root.left);
		this._postOrder(root.right);
		console.log(root.value);
	}

	levelOrder() {
		const q = [];

		q.unshift(this.root);

		while(q.length > 0) {
			const cur = q.pop();
			if (cur) {
				console.log(cur.value);
			} else {
				return;
			}

			if (cur.left) {
				q.unshift(cur.left);
			}
			if (cur.right) {
				q.unshift(cur.right);
			}
		}
	}

	minNode() {
		this._minNode(this.root);
	}

	_minNode(root) {
		if(root === null) {
			throw Error('tree is empty')
		}

		if(root.left === null){
			return root;
		}
		this._minNode(root.left);
	}

	maxNode() {
		this._minNode(this.root);
	}

	_maxNode(root) {
		if(root === null) {
			throw Error('tree is empty')
		}

		if(root.right === null){
			return root;
		}
		this._maxNode(root.left);
	}

	removeMin() {
		const ret = this.minNode();
		this.root = this._removeMin(this.root);
		return ret;
	}

	_removeMin(node) {
		if(node.left === null) {
			const rightNode = node.right;
			node.right = null;
			this.size--;
			return rightNode;
		}

		node.left = this._removeMin(node.left);
		return node;
	}

	removeMax() {
		const ret = this.maxNode();
		this.root = this._removeMax(this.root);
		return ret;
	}

	_removeMax(node) {
		if(node.right === null) {
			const leftNode = node.left;
			node.left = null;
			this.size--;
			return leftNode;
		}

		node.right = this._removeMax(node.right);
		return node;
	}
}

const bst = new BST();
const arr = [5, 2, 8, 6, 1, 10, 3];

for (let i = 0; i < arr.length; i++) {
	bst.addNode(arr[i]);
}

bst.preOrder();
console.log('\n');
bst.inOrder();
console.log('\n');
bst.postOrder();
console.log('\n');
bst.levelOrder();
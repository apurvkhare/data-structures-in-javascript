class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
    }

    //add a new node at head
    insert(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
    }

    //add a new node to tail
    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    //remove the node at the head
    remove() {
        if (this.head && this.head.next) {
            this.head = this.head.next
            this.head.prev.next = null
            this.head.prev = null
        }
    }

    //remove the node at the tail
    delete() {
        if (this.tail && this.tail.prev) {
            this.tail = this.tail.prev
            this.tail.next.prev = null
            this.tail.next = null
        }
    }

    show() {
        let arr = []
        let curr = this.head
        while (curr !== this.tail) {
            arr.push(curr.value)
            curr = curr.next
        }
        arr.push(this.tail.value)
        return arr
    }
}

module.exports = { DoublyLinkedList }

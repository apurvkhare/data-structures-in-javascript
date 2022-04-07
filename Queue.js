const { DoublyLinkedList } = require('./DoublyLinkedList.js')

class Queue {
    constructor(value) {
        this.queue = new DoublyLinkedList(value)
    }

    enqueue(value) {
        this.queue.append(value)
    } // O(1)

    dequeue() {
        this.queue.remove()
    } // O(1)

    peek() {
        return this.queue.head.value
    } // O(1)

    isEmpty() {
        return !this.queue.head
    } // O(1)

    show() {
        console.log(this.queue.show())
    }
}

const q = new Queue('Tony')
q.enqueue('Peter')
q.enqueue('Strange')
q.enqueue('Wong')
q.enqueue('Ned')

q.show()

q.dequeue()
q.dequeue()
q.enqueue('Frank')

q.show()
console.log(q.peek())
console.log(q.isEmpty())
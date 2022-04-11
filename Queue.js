const { DoublyLinkedList } = require('./DoublyLinkedList.js')

class Queue {
    constructor(value) {
        this.queue = new DoublyLinkedList(value)
        this.length = 1
    }

    enqueue(value) {
        this.queue.append(value)
        this.length++
    } // O(1)

    dequeue() {
        let removedNode
        if(this.peek()){
            removedNode = this.peek()
            this.queue.remove()
        }
        this.length--
        return removedNode
    } // O(1)

    peek() {
        return this.queue?.head?.value
    } // O(1)

    size() {
        return this.length
    }
    isEmpty() {
        return !this.queue.head
    } // O(1)

    show() {
        console.log(this.queue.show())
    }
}

// const q = new Queue('Tony')
// q.enqueue('Peter')
// q.enqueue('Strange')
// q.enqueue('Wong')
// q.enqueue('Ned')

// q.show()

// q.dequeue()
// q.dequeue()
// q.enqueue('Frank')

// q.show()
// console.log(q.peek())
// console.log(q.isEmpty())

class Stack {
    constructor(value){
        this.queue = new Queue(value)
    }

    push(value){
        this.queue.enqueue(value)
    }

    pop(){
        let tempQueue = new Queue(this.queue.dequeue())
        
        while(this.queue.size() > 1){
            tempQueue.enqueue(this.queue.dequeue())
        }
        let lastNode = this.queue.dequeue()
        this.queue = tempQueue
        tempQueue = null
        return lastNode
    }

    isEmpty(){
        return this.queue.isEmpty()
    }

    top(){
        let tempQueue = new Queue(this.queue.dequeue())
        
        while(this.queue.size() > 1){
            tempQueue.enqueue(this.queue.dequeue())
        }
        let lastNode = this.queue.peek()
        tempQueue.enqueue(this.queue.dequeue())
        this.queue = tempQueue
        tempQueue = null
        return lastNode
    }

    show(){
        this.queue.show()
    }
}

const stack = new Stack('Tony')

stack.push('Steve')
stack.push('Peter')
stack.push('Strange')
stack.push('Bruce')

stack.show()

stack.pop()
stack.pop()
stack.push('Logan')

stack.show()

console.log(stack.top())

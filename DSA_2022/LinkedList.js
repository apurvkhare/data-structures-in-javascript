class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value = 0) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value = 0) {
        const newNode = new Node(value)
        if (this.head === null && this.tail === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    pop() {
        if (this.head) {
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
                this.length--
                return
            }
            let curr = this.head
            while (curr.next !== this.tail) {
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
            this.length--
        }
    }

    shift() {
        if (this.head) {
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
            } else {
                const temp = this.head
                this.head = this.head.next
                this.length--
                temp.next = null
            }
        }
    }

    unshift(value = 0) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    get(index = 0) {
        if (index < 0 || index > this.length) return undefined
        let curr = this.head
        let counter = 1
        while (counter < index) {
            curr = curr.next
            counter++
        }
        return curr
    }

    set(index, value) {
        if (!index || !value || index < 0 || index > this.length) return undefined
        let curr = this.head
        let counter = 1
        while (counter < index) {
            curr = curr.next
            counter++
        }
        curr.value = value
        return true
    }

    display() {
        let start = this.head
        while (start !== null) {
            console.log(start.value)
            start = start.next
        }
    }

    reverse() {
        if(!this.head) return
        if(this.head === this.tail) return
        let curr = this.head
        let prev = null
        while(curr !== null){
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        let temp = this.head
        this.head = this.tail
        this.tail = temp
    }
}

const ll = new LinkedList(10)
ll.push(30)
ll.push(40)
ll.push(50)
ll.push(20)
ll.pop()
ll.push(100)
ll.unshift(35)
ll.pop()
ll.shift()
ll.display()
console.log(ll.get(4))
ll.set(3,500)
ll.reverse()
console.log("After reversal")
ll.display()
console.log(ll)

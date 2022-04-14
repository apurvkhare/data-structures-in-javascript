const { DoublyLinkedList } = require('./DoublyLinkedList')

DoublyLinkedList.prototype.rearrangeNodeAtHead = function(node){
    if(this.tail === node)
        this.tail = this.tail.prev
    // let prevNode = node.prev
    // prevNode.next = node.next
    node.prev.next = node.next

    // let nextNode = node.next
    // nextNode.prev = node.prev
    if(node.next)
        node.next.prev = node.prev

    this.head.prev = node
    node.next = this.head
    this.head = node
    node.prev = null
}

class LRUCache {
    constructor(capacity){
        this.capacity = capacity
        this.dll = new DoublyLinkedList()
        this.map = new Map()
        this.size = 0
    }

    set(key, value){
        if(this.map.has(key)){
            let node = this.map.get(key)
            node.value = value
            this.dll.rearrangeNodeAtHead(node)
        }else{
            if(this.size === this.capacity){
                this.dll.delete()
                this.map.delete(key)
                this.size--
            }
            let node = this.dll.insert(value)
            this.map.set(key, node)
            this.size++
        }
    }

    get(key){
        if(this.map.has(key)){
            let node = this.map.get(key)
            this.dll.rearrangeNodeAtHead(node)
            return node.value
        }
        return -1
    }

    show(){
        return this.dll.show()
    }
}

const cache = new LRUCache(4)

// console.log(cache.show())
cache.set(1, 'Tony')
cache.set(2, 'Steve')
cache.set(3, 'Peter')
console.log(cache.show())

cache.get(1)
console.log(cache.show())

cache.set(4, 'Strange')
console.log(cache.show())

cache.get(2)
cache.set(5, 'Frank')
console.log(cache.show())

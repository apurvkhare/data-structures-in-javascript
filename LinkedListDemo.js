class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// add(), append(), insert(index)
// remove(), delete(), removeAt(index)
// get(index)

class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        // this.length = 1
    }

    addToEmptyLL(node){
        this.head = node
        this.tail = node
        return
    }

    // add a new node to the head of the Linked list
    add(node){
        if(!this.head)
            this.addToEmptyLL(node)
        // 4->1->2->3->null
        node.next = this.head
        this.head = node
        return
    }

    // add a new node to the end of the Linked list
    append(node){
        if(!this.head)
            this.addToEmptyLL(node)
        // 1->2->3->null
        let curr = this.head
        while(curr.next !== null){
            curr = curr.next
        }
        curr.next = node
        this.tail = node
        return
    }

    // insert node to the next of index
    insert(node, index){
        if(!this.head)
            this.addToEmptyLL(node)

        // 'Tony' -> 'Peter -> 'Steve' -> 'Bruce' -> null
        let currIndex = 1
        let curr = this.head
        while(currIndex < index){
            curr = curr.next
            currIndex++
        }
        node.next = curr.next
        curr.next = node
        if(node.next === null)
            this.tail = node
        return
    }
}

const node1 = new Node('Tony')
const node2 = new Node('Peter')
const node3 = new Node('Natasha')
// const node4 = new Node('Clint')
// const node5 = new Node('Thor')
const node6 = new Node('Bruce')

// node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node5
// node5.next = node6

const ll = new LinkedList('Steve')
console.log(ll.head)
ll.add(node1)
console.log(ll.head)
ll.append(node6)
ll.append(node2)
console.log(ll.head)
ll.insert(node3, 3)
console.log(ll.head)

console.log(node1)


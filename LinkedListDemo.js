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

    // remove node from the head of the linked list
    remove(){
        // 1 -> 2 -> 3 -> 4
        if(this.head){
            let curr = this.head
            this.head = this.head.next
            curr.next = null
        }
    }

    // remove node from the end of the linked list
    delete(){
        // 1 -> 2 -> 3 -> 4 -> null
        if(this.head){
            let curr = this.head
            while(curr.next.next !== null){
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
        }
    }

    // remove the node at the given index
    removeAt(index){
        // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
        let curr = this.head
        let counter = 1
        while(curr.next !== null && counter < index - 1){
            curr = curr.next
            counter++
        }
        if(curr.next !== null){
            let removedNode = curr.next
            curr.next = curr.next.next
            removedNode.next = null
        }
    }

    showLinkedList(){
        // 1 -> 2 -> 3 -> 4
        let output = []
        let curr = this.head
        while(curr !== null){
            output.push(curr.value)
            curr = curr.next
        }
        console.log(output.toString())
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
ll.showLinkedList()
ll.add(node1)
ll.showLinkedList()
ll.append(node6)
ll.append(node2)
ll.showLinkedList()
ll.insert(node3, 3)
ll.showLinkedList()
ll.remove()
ll.showLinkedList()
ll.delete()
ll.showLinkedList()
ll.removeAt(2)
ll.showLinkedList()
ll.removeAt(5)
ll.showLinkedList()

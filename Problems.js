// Reverse a linked list
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// 5 -> 4 -> 3 -> 2 -> 1 -> null

// 1 -> null
// 1 -> null

// 1 -> 2 -> null
// 2 -> 1 -> null

let prev = null
let curr = this.head

prev = curr
curr = curr.next

prev.next = curr.next
curr.next = prev

this.head = curr
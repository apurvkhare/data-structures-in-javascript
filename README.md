# Data structures and algorithms in Javascript

## Linked List
######  A Linked List is a linear data structure same as array. In linked list elements are not stored at perticular index or memory location, instead every element is an object that have pointer or reference to a previous or next object in the list.

###### In Linked list Nodes is the term use for the elements.

###### example : 1->2->3->4->null

###### In above example first element or entry point is the head of list, The last node in this list is null. See below example how linked list look like.

```javascript
const object = {
    head:{
        value:1,
        next:{
            value:2,
            next:{
                value:3,
                next:{
                    value:4,
                    next:null
                }
            }
        }
    }
}
```

#### Types of Linked List

1. Singly Linked List
2. Doubly Linked List
3. Circular Linked List

#### Basic Operation Of the Linked List

 - Add/Push
 - Pop/Remove
 - InsertAt(node,index)
 - removeFrom(node,index)
 - removeNode(node)
 - isEmpty()
 - getList()
 - reverse()

 Many more operation can be done on linked list as well but these are most basic operation.


### add
It Adds Node/Element at the end of the list. same as pushing element in array.

``` Example : 1->2->3->4->null ```

Now here we want to add 7 at the end of the list so list will look like below

``` 1->2->3->4->-7->null ```
### append

### insert
const stack = []

;('{[]}') //true
;('{{(][{') //false
;('{}({)') //false
;('{}()') //true
;(']{}')

const balancedBrackets = brackets => {
    if (!brackets || brackets.length % 2 !== 0) {
        return false
    }

    const arrStr = Array.from(brackets)
    const stack = []

    const isEmpty = stack => stack.length === 0
    const top = stack => stack[stack.length - 1]

    for (var i = 0; i < arrStr.length; i++) {
        if (['(', '{', '['].includes(arrStr[i])) stack.push(arrStr[i])

        if ([')', '}', ']'].includes(arrStr[i])) {
            if (isEmpty(stack)) return false

            if (
                (arrStr[i] === ')' && top(stack) !== '(') ||
                (arrStr[i] === '}' && top(stack) !== '{') ||
                (arrStr[i] === ']' && top(stack) !== '[')
            )
                return false

            stack.pop()
        }
    }
    if (!isEmpty(stack)) return false

    return true
}

// console.log(balancedBrackets('}{'))

class Queue {
    constructor() {
        this.stack = []
        this.tempStack = []
    }

    enqueue(ele) {
        this.stack.push(ele)
    }

    dequeue() {
        let lastElement
        if (!this.isEmpty()) {
            const stackLength = this.stack.length
            for (var i = 0; i < stackLength - 1; i++) {
                this.tempStack.push(this.stack.pop())
            }
            lastElement = this.stack.pop()
            const tempStackLength = this.tempStack.length
            for (var i = 0; i < tempStackLength; i++) {
                this.stack.push(this.tempStack.pop())
            }
        }
        return lastElement
    }

    isEmpty() {
        return this.stack.length === 0
    }

    peek() {
        let lastElement
        if (!this.isEmpty()) {
            for (var i = 0; i < this.stack.length; i++) {
                this.tempStack.push(this.stack.pop())
            }
            lastElement = this.stack[stack.length - 1]
            for (var i = 0; i < this.tempStack.length; i++) {
                this.stack.push(this.tempStack.pop())
            }
        }
        return lastElement
    }
}

const q1 = new Queue()

q1.enqueue('Tony')
q1.enqueue('Steve')
q1.enqueue('Bruce')
q1.enqueue('Peter')
q1.enqueue('Wanda')

console.log("input",q1.stack)

q1.dequeue()
q1.enqueue('Thor')

console.log("output", q1.stack)

q1.enqueue('Strange')
q1.dequeue()
console.log(q1.stack)

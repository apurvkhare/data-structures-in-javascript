const map = new Map()

const a1 = {a: 1}
const a2 = {a: 2}
const a3 = {a: 3}
const a4 = {a: 4}
const a5 = {a: 5}

map.set(a1, 'Tony')
map.set(a2, 'Steve')
map.set(a3, 'Bruce')
map.set(a4, 'Peter')
map.set(a5, 'Frank')

console.log(map.get(a3))
console.log(map.size)
console.log(map.has({a: 6}))
map.clear()
console.log(map)
### Difference between subarray and subsequence 

- **Subarray**: A contiguous sequence of elements within an array.
```js
array = [1, 2, 3, 4, 5, 6]
subarray1 = [1, 2, 3]
subarray2 = [2, 3, 4, 5]
subarray3 = [4, 5, 6]
```
- **Subsequence**: A sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

```js
array = [1, 2, 3, 4, 5, 6]
subsequence1 = [1, 3, 5]
subsequence2 = [2, 4, 6]
subsequence3 = [1, 2, 3, 4, 5, 6]
```

### Tail Recursion

- **Tail Recursion**: A recursive function is said to be tail recursive if the recursive call is the last thing done by the function. There is no need to keep the record of the previous state.

```js
function factorial(n, a = 1) {
  if (n === 0) return a
  return factorial(n - 1, n * a)
}
```

example of non-tail recursion
```js
function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}
```
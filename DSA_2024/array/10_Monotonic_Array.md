## [Monotonic Array](https://leetcode.com/problems/monotonic-array/)

Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

```
### Sample Input

array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

### Sample Output

true
```

<details>
<summary>Approach 1</summary>

- Track two counters:
    - leftCount: non-decreasing elements
    - rightCount: non-increasing elements

- Single pass comparison:
```js
if(array[i+1] >= array[i]) leftCount++
if(array[i+1] <= array[i]) rightCount++
```

- Return true if:
    - Array is empty
    - All elements non-decreasing (leftCount = n-1)
    - All elements non-increasing (rightCount = n-1)
</details>

<details>
<summary>Solution 1</summary>

```js
function isMonotonic(array) {
  // Write your code here.
  let leftCount = 0
  let rightCount = 0
  for(let i = 0; i < array.length; i++){
      if(array[i+1] >= array[i]){
          leftCount++
      }
      if(array[i+1] <= array[i]) {
          rightCount++
      }
  }
  return array.length === 0 || leftCount === array.length - 1 || rightCount === array.length - 1
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```
</details>

<details>
<summary>Approach 2</summary>

- Initialize flags:
    - isNonIncreasing: track if elements never increase
    - isNonDecreasing: track if elements never decrease

- Single loop check:
    - If current > next: not non-decreasing
    - If current < next: not non-increasing

- Return true if either:
    - All elements non-decreasing
    - All elements non-increasing
</details>

<details>
<summary>Solution 2</summary>

```js
function isMonotonic(array) {
  // Write your code here.
  let isNonIncreasing = true
  let isNonDecreasing = true

  for(let i=0; i<array.length - 1; i++){
    if(array[i] > array[i+1]){
      isNonIncreasing = false
    } else if(array[i] < array[i+1]){
      isNonDecreasing = false
    }
  }

  return isNonDecreasing || isNonIncreasing
}
```
</details>
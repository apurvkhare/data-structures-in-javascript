## [Merge overlapping intervals](https://leetcode.com/problems/merge-intervals/description/)

Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

Each interval interval is an array of two integers, with `interval[0]` as the start of the interval and `interval[1]` as the end of the interval.

Note that back-to-back intervals aren't considered to be overlapping. For example, `[1, 5] and [6, 7]` aren't overlapping; however, `[1, 6] and [6, 7]` _are_ indeed overlapping.

Also note that the start of any particular interval will always be less than or equal to the end of that interval.

```
### Sample Input

intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

### Sample Output

[[1, 2], [3, 8], [9, 10]]
// Merge the intervals [3, 5], [4, 7], and [6, 8].
// The intervals could be ordered differently.
```

<details>
<summary>Optimized approach</summary>
Sort the intervals based on the start time. Then we can iterate through the sorted intervals and merge the overlapping intervals. We can keep track of the current interval and compare it with the previous interval. If the start time of the current interval is less than or equal to the end time of the previous interval, we can merge the intervals. Otherwise, we can add the current interval to the result array. We can return the result array at the end.
</details>

<details>
<summary>Optimized solution</summary>

```js
function mergeOverlappingIntervals(array) {
  // Write your code here.
  array.sort((a, b) =>  a[0] - b[0])
  const result = [array[0]]
  let curr = 1
  
  while (curr < array.length) {
    if(array[curr][0] <= result[result.length - 1][1]){
      result[result.length - 1][1] = Math.max(array[curr][1], result[result.length - 1][1])
    } else {
      result.push(array[curr])
    }
    curr++
  }
  return result;
}

// Time complexity: O(nlog(n)) + O(n) where n is the length of the input array
// Space complexity: O(n)
```
</details>
## [Validate Subsequence](https://leetcode.com/problems/is-subsequence/description/)

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers `[1,2,3]` form a subsequence of the array `[1,2,3,4]`, and so do the numbers `[2,4]`. Note that a single number in an array and the array itself are both valid subsequences of the array.

```
=> Sample Input

array = [5, 1, 22, 25, 6, -1, 8, 10]
sqeuence = [1, 6, -1, 10]

=> Sample Output

true
```
<details>
  <summary>Solution approach</summary>
  You can solve this problem with two pointers. You can iterate through the array and sequence and check if the elements are equal. If they are equal, increment both pointers. If they are not equal, increment the array pointer. If the sequence pointer reaches the end, return true.
</details>

<details>
  <summary>Solution</summary>

```js
/*
- Two pointers: p1 points to index of array, p2 points to index of sequence.
- Check if array[p1] === squence[p2], if so increment both p1 & p1 else just increment p1. 
- Check if p2 === sequence.length, if so then sequence is a subsqeuence. 
- If p1 >= array.length return false
*/

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let p1 = 0 
  let p2 = 0
  while(p1 < array.length){
    if(array[p1] === sequence[p2]){
      p1 += 1
      p2 += 1
    }
    if(array[p1] !== sequence[p2]){
      p1 += 1
    }
    if(p2 === sequence.length)
      return true
  }
  return false
}

// Time complexity - O(n)
// Space complexity - O(1)

```
</details>

<details>
  <summary>Slightly optimized solution</summary>

```js
//slightly optimized version with same time complexity
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let p1 = 0, p2 = 0

  while (p1 < array.length && p2 < sequence.length) {
    if(array[p1] === sequence[p2])
      p2++
    p1++
  }

  if(p2 === sequence.length)
    return true

  return false
}
```
</details>

### Similar Problems

- [Is Subsequence](https://leetcode.com/problems/is-subsequence/description/)
- [!Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/description/)
- [Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/description/)
## First Duplicate Value

<p>
  Given an array of integers between <span>1</span> and <span>n</span>,
  inclusive, where <span>n</span> is the length of the array, write a function
  that returns the first integer that appears more than once (when the array is
  read from left to right).
</p>
<p>
  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.
</p>
<p>
  If no integer appears more than once, your function should return
  <span>-1</span>.
</p>
<p>Note that you're allowed to mutate the input array.</p>
<h3>Sample Input #1</h3>
<pre><span class="CodeEditor-promptParameter">array</span> = [2, 1, 5, 2, 3, 3, 4]
</pre>
<h3>Sample Output #1</h3>
<pre>2 <span class="CodeEditor-promptComment">// 2 is the first integer that appears more than once.</span>
<span class="CodeEditor-promptComment">// 3 also appears more than once, but the second 3 appears after the second 2.</span>
</pre>
<h3>Sample Input #2</h3>
<pre><span class="CodeEditor-promptParameter">array</span> = [2, 1, 5, 3, 3, 2, 4]
</pre>
<h3>Sample Output #2</h3>
<pre>3 <span class="CodeEditor-promptComment">// 3 is the first integer that appears more than once.</span>
<span class="CodeEditor-promptComment">// 2 also appears more than once, but the second 2 appears after the second 3.</span>
</pre>

</details>

<details>
<summary>Brute force approach</summary>
Iterate through the array and for each element, iterate through the rest of the array to check if there is a duplicate. If there is, store the index of the second occurrence of the duplicate element, compare it with the minimum second index which is initially set to the length of the array. If the second index is less than the minimum second index, update the minimum second index and return the element at that index. If no duplicates are found, return -1.
</details>

<details>
<summary>Brute force solution</summary>

```js
function firstDuplicateValue(array) {
  // Write your code here.
  let minimumSecondIndex = array.length
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i] === array[j])
        minimumSecondIndex = Math.min(minimumSecondIndex, j)
    }
  }
  return minimumSecondIndex === array.length ? -1 : array[minimumSecondIndex]
}

// Time complexity: O(n^2)
// Space complexity: O(1)
```
</details>

<details>
<summary>Optimized approach 1</summary>
Create a set to store the elements that have been seen so far. Iterate through the array and for each element, check if it is in the set. If it is, return the element. If it is not, add it to the set. If no duplicates are found, return -1.
</details>

<details>
<summary>Optimized solution 1</summary>

```js
function firstDuplicateValue(array) {
  // Write your code here.
  let nums = new Set()

  for(let i=0; i<array.length; i++){
    if(nums.has(array[i])){
      return array[i]
    }
    nums.add(array[i])
  }
  return -1
}

// Time complexity: O(n)
// Space complexity: O(n)
```
</details>

<details>
<summary>Most Optimized approach(and unintuitive)</summary>
NOTE: This approach mutates the input array.

This approach is not intuitive and requires understanding the constraints of the problem. The array contains integers between 1 and n, inclusive, where n is the length of the array. This means that the array can be used as a hash table. We can use the array itself to store the state of the elements. For each element, we can negate the value at the index corresponding to the element. If we encounter a negative value at the index corresponding to the element, it means that the element has been seen before and is a duplicate. Return the absolute value of the element. If no duplicates are found, return -1.
</details>

<details>
<summary>Most Optimized solution(and unintuitive)</summary>

```js
function firstDuplicateValue(array) {
  // Write your code here.
  for(let i=0; i<array.length; i++){
    let absValue = Math.abs(array[i])
    if(array[absValue - 1] < 0) return absValue
    array[absValue - 1] *= -1
  }
  return -1;
}

// Time complexity: O(n)
// Space complexity: O(1)
```
</details>

### Similar Questions

- [Find the duplicate number](https://leetcode.com/problems/find-the-duplicate-number/)
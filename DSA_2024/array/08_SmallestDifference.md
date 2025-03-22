## Smallest Difference

Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference.

```
### Sample Input

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

### Sample Output

[28, 26]
```

<details>
<summary>Brute force approach</summary>
You can use two for loops to calculate the absolute difference between each pair of numbers in the two arrays. You can then keep track of the pair of numbers with the smallest difference.
</details>

<details>
<summary>Brute force solution</summary>

```js
/*
BRUTE FORCE
Two for loops for finiding all possible pairs of numbers and then choosing the one whose absolute difference is closest to zero
*/

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let min = Infinity
  let result = []
  for (let num1 of arrayOne) {
    for (let num2 of arrayTwo) {
      let difference;
      if(num1 > num2){
        difference = num1 - num2
      } else {
        difference = num2 - num1
      }
      if(difference < min){
       min = difference
       result = [num1, num2]
      }
    }
  }
  return result
}

// Time complexity - O(n*m) where n and m are lengths of each array respectively
// Space complexity - O(1)
```
</details>

<details>
<summary>Optimal solution approach</summary>
You can sort both arrays and iterate through them. You can then calculate the absolute difference between the current numbers in the arrays and keep track of the pair of numbers with the smallest difference.
</details>

<details>
<summary>Optimal solution</summary>

```js
/*
Sort both the arrays, take two pointers p1 and p2 each pointing to the 0th index of the arrays respectively. Find the absolute difference of array1[p1] and array2[p2], update the min difference if it is less than exisintg min. If array1[p1] < array2[p2] increment p1 else increment p2. If both are equal then the difference would be zero, so return the pair.
*/

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let p1 = 0, p2 = 0
  let min = Infinity
  while(p1 < arrayOne.length && p2 < arrayTwo.length){
    let num1 = arrayOne[p1]
    let num2 = arrayTwo[p2]
    let difference = Math.abs(num1 - num2);
    if(difference < min){
     min = difference
     result = [num1, num2]
    }
    
    if(num1 < num2){
      p1++
    } else if(num1 > num2){
      p2++
    } else if(num1 === num2) {
      return [num1, num2]
    }
  }
  return result
}

// Time complexity - O(nlog(n) + mlog(m)) where n and m are lengths of each array respectively
// Space complexity - O(1)
```
</details>

## Similar Problems

- [Minimum Absolute Difference](https://leetcode.com/problems/minimum-absolute-difference/description/)
- Refer similar problems of the above problem on leetcode
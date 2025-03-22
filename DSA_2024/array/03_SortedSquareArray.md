## [Sorted Square Array](https://leetcode.com/problems/squares-of-a-sorted-array/description/)

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

```
=> Sample Input

array = [1,2,3,5,6,8,9]

=> Sample Output

[1, 4, 9, 25, 36, 64, 81]
```

<details>
  <summary>Brute Force solution approach</summary>
  Iterate over the entire array, square each element. Then sort the squared array beacuse the input array might have negative numbers
</details>

<details>
  <summary>Brute Force solution</summary>

```js
/*
BRUTE FORCE
Iterate over the entire array, square each element. 
Then sort the squared array beacuse the input array might have negative numbers
*/

function sortedSquaredArray(array) {
  // Write your code here.
  return array.map(num => num*num).sort((a, b) => a - b);
}

// Time complexity - O(nlog(n))
// Space complexity - O(n)
```
</details>

<details>
  <summary>Optimal solution approach</summary>
  Use two pointers one from starting of the array and one from end of the array. Initiate an empty result array. Compare the absolute value of p1 and p2 and add the larger one to the result array starting from the last index and move that pointer inwards. Continue till the length of the array.
</details>

<details>
  <summary>Optimal solution</summary>

```js
/* 
- Use two pointers one from starting of the array and one from end of the array. 
- Initiate an empty result array. 
- Compare the absolute value of p1 and p2 and add the larger one to the result array starting from the last index and move that pointer inwards.
- Continue till the length of the array.
*/

function sortedSquaredArray(array) {
  // Write your code here.
  let p1 = 0;
  let p2 = array.length - 1;
  const result = Array(array.length).fill(0)
  let i = array.length - 1
  
  while(i > -1){
    if(Math.abs(array[p1]) > Math.abs(array[p2])){
      result[i] = array[p1]**2
      p1++
    } else {
	  result[i] = array[p2]**2
      p2--
    }
    i--
  }
  return result;
}

// Time complexity - O(n)
// Space complexity - O(n)
```
</details>

### Similar problems

- [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)
- [Sort Transformed Array](https://leetcode.com/problems/sort-transformed-array/description/)

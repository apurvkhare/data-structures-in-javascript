## [Two Number Sum](https://leetcode.com/problems/two-sum/)

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

```
=> Sample Input

array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

=> Sample output

[-1, 11]
```
<details>
  <summary>Brute Force solution approach</summary>
  You can solve this problem with two nested loops. However, you can solve this problem with a more optimal approach using a hash set.
</details>

<details>
  <summary>Brute Force solution</summary>

```js
function twoNumberSum(array, targetSum) {
  // Write your code here.
  for(let i=0; i<array.length - 1; i++){
    for(let j=i+1; j<array.length; j++){
      if(array[i] + array[j] === targetSum)
        return [array[i], array[j]]
    }
  }
  return []
}

// Time complexity - O(n^2)
// Space complexity - O(1)
```
</details>

<details>
  <summary>Optimal solution approach 1</summary>
  Create a hash set of all the array elements. Search for y (y = targetSum - x) in the hash set for every number in the array.
</details>

<details>
  <summary>Optimal solution 1</summary>

```js
/*
create a hashset of all of the array elements
search for y (y = targetSum - x) in hashmap for every number in array
*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const set = new Set()
  for(let num of array) {
    if(set.has(targetSum - num)){
      return [num, targetSum - num]
    } else {
      set.add(num)
    }
  }
  
  return []
}

// Time complexity - O(n)
// Space complexity - O(n)
```
</details>

> [!NOTE]
> The solution below will not work if you are asked to return the indices instead of the elements 


<details>
  <summary>Optimal solution approach 2</summary>
  Sort the array and use the two pointer approach
</details>

<details>
  <summary>Optimal solution 2</summary>

```js
/*
sort the array, now take two pointers one at i=0 and one at i=array.length - 1
increment the left pointer if the sum is less than targetSum and increment the right pointer if the sum is more than the targetSum
*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let left = 0
  let right = array.length - 1
  while(left !== right){
    if(array[left] + array[right] === targetSum){
      return [array[left], array[right]]
    } else if(array[left] + array[right] > targetSum){
      right -= 1
    } else if(array[left] + array[right] < targetSum){
      left += 1
    }
  }
  return []
}

// Time complexity - O(nlog(n))
// Space complexity - O(1)
```
</details>

### Similar Problems

- [Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
  - use the two pointer approach
- [Two Sum III - Data structure design](https://leetcode.com/problems/two-sum-iii-data-structure-design/)
  - use a hashmap to store the numbers and their frequency
  - while searching for the number, check if the number is not the same as the (targetSum - number)
  - if the number is the same as the (targetSum - number), check if the frequency of the number is greater than 1
    - if the frequency is greater than 1, return true
  - if the number is not the same as the (targetSum - number), check if the number is present in the hashmap
  - if the number is present in the hashmap, return true
- [Two Sum Less Than K](https://leetcode.com/problems/two-sum-less-than-k/)
  - sort the array
  - use the two pointer approach
  - if the sum is less than k, update the maxSum
- [Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)
- [Two Sum BSTs](https://leetcode.com/problems/two-sum-bsts/)
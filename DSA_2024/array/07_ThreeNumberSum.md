## Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.

```
### Sample Input

array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

### Sample Output

[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
```
<details>
<summary>Brute force approach</summary>
Using three for loops to calculate the sums of all possible triplets in the array would generate an algorithm that runs in O(n^3) time, where n is the length of the input array.
</details>

<details>
<summary>Optimal solution approach</summary>
You can sort the array and iterate through it. For each element, you can use two pointers to find the other two elements that sum up to the target sum. You can then add the triplet to the result array.
</details>

<details>
<summary>Optimal solution</summary>

```js
function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b)
  let currentSum = 0
  let result = []
  
  for (let i = 0; i < array.length - 2; i++) {
    let left = i+1
    let right = array.length - 1
    while (left < right) {
      currentSum = array[i] + array[left] + array[right]
      if(currentSum === targetSum){
        result.push([array[i], array[left], array[right]])
        left++
        right--
      }
      else if(currentSum > targetSum)
        right--
      else
        left++
    }
  }

  return result
}

// Time complexity: O(n^2)
// Space complexity: O(n)
```
</details>

## [3Sum](https://leetcode.com/problems/3sum/)

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.
 
```
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

```
```
Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
```

<details>
<summary>Brute force approach</summary>
Using three for loops to calculate the sums of all possible triplets in the array would generate an algorithm that runs in O(n^3) time, where n is the length of the input array. Duplicate triplets can be avoided by using a set to store the triplets.
</details>

<details>
<summary>Better approach</summary>
Hashing can be used to reduce the time complexity of the algorithm. You can sort the array and iterate through it. For each element, you can use two pointers to find the other two elements that sum up to the target sum. You can then add the triplet to the result array. To avoid duplicate triplets, you can skip over duplicate elements in the array.
</details>

<details>
<summary>Optimal solution approach</summary>
You can sort the array and iterate through it. For each element, you can use two pointers to find the other two elements that sum up to the target sum. You can then add the triplet to the result array. To avoid duplicate triplets, you can skip over duplicate elements in the array.
</details>

<details>
<summary>Optimal solution</summary>

```js
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let currentSum = 0
    let result = []
    
    for (let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i-1])
            continue

        let left = i+1
        let right = nums.length - 1
        while (left < right) {
            currentSum = nums[i] + nums[left] + nums[right]
            if(currentSum === 0){
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while(left < right && nums[left] === nums[left-1]){
                    left++
                }
                while(left < right && nums[right] === nums[right+1]){
                    right--
                }
            }
            else if(currentSum > 0){
                right--
                while(left < right && nums[right] === nums[right+1]){
                    right--
                }
            }
            else{
                left++
                while(left < right && nums[left] === nums[left-1]){
                    left++
                }
            }
        }
    }

  return result
};
```
</details>

## Similar Problems

Refer to 3sum problem on LeetCode: [3Sum](https://leetcode.com/problems/3sum/)
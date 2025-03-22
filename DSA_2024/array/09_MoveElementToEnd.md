## [Move Element To End](https://leetcode.com/problems/move-zeroes/description/)

You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

```
### Sample Input

array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2

### Sample Output

[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently
```

<details>
<summary>Brute Force approach</summary>
<b>NOTE:</b> This approach does not mutate the input array and creates a new array<br>
Iterate over the array and add the elements that are not equal to the given integer to a new array. Also keep a count of the number of times you see the integer. After the iteration, add the integer to the new array the number of times you saw it.
</details>

<details>
<summary>Optimal approach</summary>
<b>NOTE:</b> This approach does not maintain the order of the other integers<br>
Use two pointers to keep track of the start and end of the array. The start pointer will point to the first element of the array and the end pointer will point to the last element of the array. While the start pointer is less than the end pointer, check if the element at the start pointer is equal to the given integer. If it is, swap the elements at the start and end pointers. If it is not, increment the start pointer. If the element at the start pointer is equal to the given integer, decrement the end pointer. Continue this process until the start pointer is greater than or equal to the end pointer.
</details>

<details>
<summary>Optimal solution</summary>

```js
function moveElementToEnd(array, toMove) {
  // Write your code here.
    let left = 0
    let right = array.length - 1

    while(left < right){
        if(array[left] === toMove){
            while(array[right] === toMove){
                right--
            }
            if(left < right) {
              let temp = array[left]
              array[left] = array[right]
              array[right] = temp
            }
        }
        left++
    }
  return array
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```
</details>

<details>
<summary>Most optimal approach</summary>
Use two pointers. The left pointer will point to the first element of the array and the right pointer will point to the second element of the array. While the right pointer is less than the length of the array, check if the element at the left pointer is equal to the given integer. If it is, increment the right pointer until you find an element that is not equal to the given integer. If the right pointer is less than the length of the array, swap the elements at the left and right pointers. Increment the left and right pointers. Continue this process until the right pointer is equal to the length of the array.
</details>


<details>
<summary>Most Optimal solution</summary>

```js
var moveZeroes = function(nums) {
    let left = 0
    let right = 1

    while(right < nums.length){
        if(nums[left] === 0){
            while(nums[right] === 0){
                right++
            }
            if(right < nums.length) {
                let temp = nums[left]
                nums[left] = nums[right]
                nums[right] = temp
            }
        }
        left++
        right++
    }
};

// Time Complexity: O(n)
// Space Complexity: O(1)
```
</details>
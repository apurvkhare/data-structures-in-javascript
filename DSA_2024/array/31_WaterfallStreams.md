## Waterfall Streams

You're given a two-dimensional array that represents the structure of an indoor waterfall and a positive integer that represents the column that the waterfall's water source will start at. More specifically, the water source will start directly above the structure and will flow downwards.

Each row in the array contains 0s and 1s, where a 0 represents a free space and a 1 represents a block that water can't pass through. You can imagine that the last row of the array contains buckets that the water will eventually flow into; thus, the last row of the array will always contain only 0s. You can also imagine that there are walls on both sides of the structure, meaning that water will never leave the structure; it will either be trapped against a wall or flow into one of the buckets in the last row.

As water flows downwards, if it hits a block, it splits evenly to the left and right-hand side of that block. In other words, 50% of the water flows left and 50% of it flows right. If a water stream is unable to flow to the left or to the right (because of a block or a wall), the water stream in question becomes trapped and can no longer continue to flow in that direction; it effectively gets stuck in the structure and can no longer flow downwards, meaning that 50% of the previous water stream is forever lost.

Lastly, the input array will always contain at least two rows and one column, and the space directly below the water source (in the first row of the array) will always be empty, allowing the water to start flowing downwards.

Write a function that returns the percentage of water inside each of the bottom buckets after the water has flowed through the entire structure.

You can refer to the first 4.5 minutes of this question's video explanation for a visual example.

```
Sample Input
array = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0],
]
source = 3
Sample Output
[0, 0, 0, 25, 25, 0, 0]

// The water will flow as follows:
// [
//   [0, 0, 0, ., 0, 0, 0],
//   [1, ., ., ., ., ., 0],
//   [0, ., 1, 1, 1, ., 0],
//   [., ., ., ., ., ., .],
//   [1, 1, 1, ., ., 1, 0],
//   [0, 0, 0, ., ., 0, 1],
//   [0, 0, 0, ., ., 0, 0],
// ]
```

Here's the step-by-step algorithm workflow for the waterfall streams problem:

### Algorithm Steps

1. **Initialize Water Source**
   - Take input array and source column index
   - Set first row (rowAbove) at source index to 100% water

2. **Process Each Row (top to bottom)**
   - Iterate through each row starting from index 1
   - For each row:
     1. Get current row array
     2. Check each position in row above

3. **Water Flow Logic (for each position)**
   - If water exists above (value > 1):
     - If no block below: Water flows straight down
     - If block exists: Split water flow
       1. Try flowing right:
          - Search right until empty space or wall
          - Add half water to found position
       2. Try flowing left:
          - Search left until empty space or wall
          - Add half water to found position

4. **Row Update**
   - Current row becomes rowAbove for next iteration
   - Continue until bottom row reached

5. **Result**
   - Return final row showing water percentages

```js
/*

*/

function waterfallStreams(array, source) {
  // Write your code here.
  let rowAbove = array[0]
  rowAbove[source] = 100
  
  for (let row = 1; row < array.length; row++) {
    const currentRow = array[row]

    for (let index = 0; index < rowAbove.length; index++) {
      const valueAbove = rowAbove[index]

      const hasWaterAbove = valueAbove > 1
      const hasBlock = currentRow[index] === 1

      if(!hasWaterAbove)
        continue
      
      if(!hasBlock){
        currentRow[index] += valueAbove
        continue
      }

      const splitWater = valueAbove/2

      let rightIndex = index
      while (rightIndex + 1 < rowAbove.length) {
        rightIndex++
        if(rowAbove[rightIndex] === 1)
          break
        if(currentRow[rightIndex] !== 1) {
          currentRow[rightIndex] += splitWater
          break
        }
      }

      let leftIndex = index
      while (leftIndex - 1 >= 0) {
        leftIndex--
        if(rowAbove[leftIndex] === 1)
          break
        if(currentRow[leftIndex] !== 1) {
          currentRow[leftIndex] += splitWater
          break
        }
      }
    }
    rowAbove = currentRow
  }

  return rowAbove
}

// Time complexity - O(w^2 * h) where w is the width of the array and h is the height of the array
// Space complexity - O(w) where w is the width of the array
```

## Similiar Problems

### [Trapping rain water](https://leetcode.com/problems/trapping-rain-water/description/)

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

![rainwatertrap](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

    Example 2:

    Input: height = [4,2,0,3,2,5]
    Output: 9


Constraints:

    n == height.length
    1 <= n <= 2 * 104
    0 <= height[i] <= 105

```js
/*
Initialization:

- Creates two arrays: prefixMax and suffixMax of same length
- Initializes total water trapped as 0

Calculate Prefix Maximum Array (Left to Right):

First element is same as height[0]
For each position, stores maximum height seen so far
At any point i, prefixMax[i] = max(prefixMax[i-1], height[i])

Calculate Suffix Maximum Array (Right to Left):

Last element is same as height[n-1]
For each position from right, stores maximum height seen so far
At any point j, suffixMax[j] = max(suffixMax[j+1], height[j])

Calculate Water Trapped:

For each position k:

Get maximum height to left (prefixMax[k])
Get maximum height to right (suffixMax[k])

If current height is less than both maxima:
Water trapped = min(leftMax, rightMax) - current height
Add trapped water to total

Return total water trapped
*/

var trap = function(height) {
    let n = height.length
    let prefixMax = new Array(n)
    let suffixMax = new Array(n)
    let total = 0

    prefixMax[0] = height[0]
    for(let i = 1; i < n; i++){
        prefixMax[i] = Math.max(prefixMax[i-1], height[i])
    }

    suffixMax[n-1] = height[n-1]
    for(let j = n - 2; j >= 0; j--){
        suffixMax[j] = Math.max(suffixMax[j+1], height[j])
    }

    for(let k=0; k<n; k++){
        let leftMax = prefixMax[k]
        let rightMax = suffixMax[k]

        if(height[k] < leftMax && height[k] < rightMax)
            total += Math.min(leftMax, rightMax) - height[k]
    }

    return total
};

// Time complexity - O(n)
// Space complexity - O(n)
```

```js
/*
Initialization:

- Set two pointers: left (at start) and right (at end)
- Initialize maxLeft and maxRight with 0 to track maximum heights
- Initialize total water trapped as 0

Main Loop (while left < right):
Compare heights at left and right pointers:
If height[left] <= height[right]:

Move left pointer inward (left++)
Update maxLeft = max(previous height, maxLeft)
If current height < maxLeft:

Add trapped water: maxLeft - current height

If height[left] > height[right]:

Move right pointer inward (right--)
Update maxRight = max(previous height, maxRight)
If current height < maxRight:

Add trapped water: maxRight - current height

Return total trapped water
*/

var trap = function(height) {
    let n = height.length
    let left = 0
    let right = n - 1
    let total = 0
    let maxLeft = 0
    let maxRight = 0

    while(left < right){
        if(height[left] <= height[right]){
            left++
            maxLeft = Math.max(height[left - 1], maxLeft)
            if(height[left] < maxLeft)
                total += maxLeft - height[left]
        } else {
            right--
            maxRight = Math.max(height[right + 1], maxRight)
            if(height[right] < maxRight)
                total += maxRight - height[right]
        }
    }

    return total
};

// Time complexity - O(n)
// Space complexity - O(1)
```
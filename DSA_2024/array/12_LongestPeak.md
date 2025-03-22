## [Longest Peak](https://leetcode.com/problems/longest-mountain-in-array)

Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are **strictly** increasing until they reach a tip (the highest value in the peak), at which point they become **strictly** decreasing. At least three integers are required to form a peak.

For example, the integers `1, 4, 10, 2` form a peak, but the integers `4, 0, 10` don't and neither do the integers `1, 2, 2, 0`. Similarly, the integers `1, 2, 3` don't form a peak because there aren't any strictly decreasing integers after the 3.

```
### Sample Input

array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

### Sample Output

6 // 0, 10, 6, 5, -1, -3
```

<details>
<summary>Approach</summary>

### Step-by-step Plan:
1. **Initialize**
   - Track maximum peak length
   - Iterate through potential peak points

2. **Peak Detection**
   - Check if current element is larger than neighbors
   - If true, found potential peak tip

3. **Peak Measurement**
   - Count increasing elements to left of peak
   - Count decreasing elements to right of peak
   - Update max peak length if current peak is longer
</details>

<details>
<summary>Solution</summary>

```js
/*
First find all the tip of the peaks, tip is the number in the array which is greater than its adjacent numbers. Now count how long does the peak go on the left and right. Do this for all peaks. Return the max peak.
*/

function longestPeak(array) {
  // Write your code here.
  let maxPeak = 0
  
  for(let i = 1; i < array.length - 1; i++){
    let count = 1;
    if(array[i] > array[i - 1] && array[i] > array[i + 1]){
      let j = i
      let k = i
      
      while(array[j]>array[j-1]){
        j--
        count++
      }
      while(array[k]>array[k+1]){
        k++
        count++
      }
      if(count > maxPeak)
        maxPeak = count
    }
  }
  return maxPeak
}

// Time complexity: O(n)
// Space complexity: O(1)
```
</details>
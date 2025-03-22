## [Spiral Traverse](https://leetcode.com/problems/spiral-matrix/)

Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.

```
### Sample Input

array = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
]

### Sample Output

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
```

<details>
<summary>Approach 1</summary>

1. Setup
- Initialize boundary pointers:
    - startRow, startCol at 0
    - endRow, endCol at matrix edges
- Create empty result array

2. Main Loop (while boundaries don't cross)
- Process matrix in layers from outside in
- Each iteration handles one complete rectangle

3. Four Traversal Steps
    1. Top Row →
        - Move left to right along startRow
        - Add each element to result

    2. Right Column ↓
    - Move top to bottom along endCol
    - Add each element to result

    3. Bottom Row ←
    - Only if multiple rows remain
    - Move right to left along endRow
    - Add each element to result

    4. Left Column ↑
    - Only if multiple columns remain
    - Move bottom to top along startCol
    - Add each element to result

4. Update Boundaries
    - Increment: startRow, startCol
    - Decrement: endRow, endCol
    - Move inward for next layer

5. Return
    - Return completed result array
</details>

<details>
<summary>Solution 1</summary>

```js
var spiralOrder = function(matrix) {
    let startRow = 0
    let startCol = 0
    let endRow = matrix.length - 1
    let endCol = matrix[0].length - 1

    let result = []

    while(startRow <= endRow && startCol <= endCol){
        for(let i = startCol; i <= endCol; i++){
            result.push(matrix[startRow][i])
        }

        for(let j = startRow + 1; j <= endRow; j++){
            result.push(matrix[j][endCol])
        }

        for(let k = endCol - 1; k >= startCol; k--){
            if(startRow < endRow)
                result.push(matrix[endRow][k])
        }

        for(let l = endRow - 1; l > startRow; l--){
            if(startCol < endCol)
                result.push(matrix[l][startCol])
        }

        startRow++
        endRow--
        startCol++
        endCol--
    }

    return result
};
```
</details>

<details>
<summary>Approach 2</summary>

</details>

<details>
<summary>Solution 2</summary>

```js

```
</details>
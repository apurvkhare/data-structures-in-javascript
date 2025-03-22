## [Transpose Matrix](https://leetcode.com/problems/transpose-matrix/description/)

You're given a 2D array of integers `matrix`. Write a function that returns the transpose of the matrix.

The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); it switches the row and column indices of the original matrix.

You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.

```
### Sample Input #1

matrix = [
  [1, 2],
]

### Sample Output # 1

[
  [1],
  [2]
]

### Sample Input #2

matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
]

### Sample Output #2

[
  [1, 3, 5],
  [2, 4, 6]
]

### Sample Input #3

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

### Sample Output #3

[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
```

<details>
<summary>Solution approach</summary>
The transpose of a matrix is a flipped version of the original matrix across its main diagonal. To get the transpose of a matrix, you can iterate through the rows and columns of the matrix and swap the values at the current row and column indices with the values at the current column and row indices.
</details>

<details>
<summary>Solution</summary>

```js
function transposeMatrix(matrix) {
  // Write your code here.
  let result = []
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(!result[j])
        result[j] = []
      result[j][i] = matrix[i][j]
    }
  }
  
  return result;
}
```

</details>
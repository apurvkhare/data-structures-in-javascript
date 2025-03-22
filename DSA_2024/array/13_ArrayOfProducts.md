## [Array of Products](https://leetcode.com/problems/product-of-array-except-self)

Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

In other words, the value at `output[i]` is equal to the product of every number in the input array other than `input[i]`.

***Note that you're expected to solve this problem without using division.***

```
### Sample Input

array = [5, 1, 4, 2]

### Sample Output

[8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4
```

<details>
<summary>Brute Force Approach</summary>

Use 2 for loops, first one to iterate over the entire array. Second loop to caclulate the product of all the elements of the array except when `i === j`.
</details>

<details>
<summary>Brute Force Solution</summary>

```js
/*
BRUTE FORCE

Use 2 for loops, first one to iterate over the entire array. Second loop to caclulate the product of all the elements of the array except when i === j.
*/

function arrayOfProducts(array) {
  // Write your code here.
  let result = []

  for(let i = 0; i < array.length; i++){
    let product = 1;
    for(let j = 0; j< array.length; j++){
      if(j !== i){
        product *= array[j]
      }
    }
    result[i] = product
  }

  return result
}

// Time complexity - O(n^2)
// Space complexity - O(n)
```
</details>

<details>
<summary>Optimized Approach</summary>

Create two arrays, which stores the product of the elements to the left of all the elements and the elements to the right of all the elements respectively. Then the result array is the product of elements at the i index of left and right array.
</details>

<details>
<summary>Optimized Solution</summary>

```js
/*
TIME OPTIMIZATION

Create two arrays, which stores the product of the elements to the left of all the elements and the elements to the right of all the elements respectively. Then the result array is the product of elements at the i index of left and right array.
*/

function arrayOfProducts(array) {
  // Write your code here.
  const n = array.length
  const leftArray = new Array(n).fill(1);
  const rightArray = new Array(n).fill(1);
  const result = []

  for(let i = 1; i<n; i++){
    let leftProduct = leftArray[i-1];
    let rightProduct = rightArray[n-i];

    leftArray[i] = leftProduct * array[i-1];
    rightArray[n-i-1] = rightProduct * array[n-i]
  }

/*
Can create the left and right array in two for loops for easy to understand solution

  for(let i=1; i<n; i++){
    let leftProduct = leftArray[i-1];
    leftArray[i] = leftProduct * array[i-1];
  }

  for(let i= n-2; i>=0; i--){
    let rightProduct = rightArray[i+1];
    rightArray[i] = rightProduct * array[i+1]
  }

*/
  for(let i = 0; i<n; i++){
    result[i] = leftArray[i]*rightArray[i]
  }

  return result
}

// Time complexity - O(n)
// Space complexity - O(n)
```
</details>

<details>
<summary>Most Optimized Approach</summary>

The actual space complexity of the previous solution is O(3n), since we need three arrays - left, right and result. We can save the space by using only one array. We create a result array with the same length as input array, all elements initialized to 1. Store the left products similar to the above solution. Now while calulating the right products, instead of storing the products in a separate array we can directly multiply it with respective left product from result array and update the result array.
</details>

<details>
<summary>Most Optimized Solution</summary>

```js
/*
SPACE OPTIMIZATION 

The actual space complexity of the previous solution is O(3n), since we need three arrays - left, right and result. We can save the space by using only one array. We create a result array with the same length as input array, all elements initialized to 1. Store the left products similar to the above solution. Now while calulating the right products, instead of storing the products in a separate array we can directly multiply it with respective left product from result array and update the result array.
*/

function arrayOfProducts(array) {
  // Write your code here.
  const n = array.length
  const result = new Array(n).fill(1);
  
  for(let i=1; i<n; i++){
    let leftProduct = result[i-1];
    result[i] = leftProduct * array[i-1];
  }

  let rightProduct = 1
  for(let i= n-2; i>=0; i--){
    rightProduct *= array[i+1]
    result[i] = rightProduct * result[i]
  }

  return result
}

// Time complexity - O(n)
// Space complexity - O(n)
```
</details>


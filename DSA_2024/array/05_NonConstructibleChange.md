## Non-construcible Change

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value)

For example, if you're given `coins = [1, 2, 3]`, the minimum amount of change that you can't create is `4`. If you're given no coins, the minimum amount of change that you can't create is `1`.

```
=> Sample Input

coins = [5,7,1,1,2,3,22]

=> Sample Output

20
```

<details>
<summary>Solution approach</summary>
The minimum amount of change that you can't create is `1` if you're given no coins. If you're given coins, you can sort them and iterate through them. If the current coin is greater than the current total change + 1, then you can't create the current total change + 1. Otherwise, you can create the current total change + the current coin.
</details>

<details>
<summary>Solution</summary>

```js

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b)
  let currentTotalChange = 0

  for (let i = 0; i < coins.length; i++) {
    if(coins[i] > currentTotalChange + 1)
      return currentTotalChange + 1
    else
      currentTotalChange += coins[i]
  }
  
  return currentTotalChange + 1;
}

```
</details>

## Similar Problems

- [Maximum Number of Consecutive Values You Can Make
](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/)
## [First Non-Repeating Character](https://leetcode.com/problems/first-unique-character-in-a-string/description/)

Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.

```
Sample Input
string = "abcdcaf"

Sample Output
1 // The first non-repeating character is "b" and is found at index 1.
```

<details>
<summary>Brute force approach</summary>

</details>

<details>
<summary>Brute force solution</summary>

```js
function firstNonRepeatingCharacter(string) {
  // Write your code here.
  for (let i = 0; i < string.length; i++) {
    let count = 1
    for (let j = 0; j < string.length; j++) {
      if(string[i] === string[j] && i !== j)
        count++
    }
    if(count === 1)
      return i
  }
  return -1;
}

// Time complexity: O(n^2)
// Space complexity: O(1)
```
</details>

<details>
<summary>Optimized Approach</summary>

</details>

<details>
<summary>Optimized Solution</summary>

```js
function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const map = new Map()
  for (let i = 0; i < string.length; i++) {
    if(map.has(string[i])){
      map.set(string[i], map.get(string[i]) + 1)
    } else {
      map.set(string[i], 1)
    }
  }

  for (let j = 0; j < string.length; j++) {
    if(map.get(string[j]) === 1)
      return j
  }
  
  return -1;
}

// Time complexity: O(n)
// Space complexity: O(1), since the input string contains only lowercase English-alphabet letters
```
</details>

### Similar Questions

- [First letter to appear twice](https://leetcode.com/problems/first-letter-to-appear-twice/)
- [Sort characters by frequency](https://leetcode.com/problems/sort-characters-by-frequency/description/)
## [Semordnilap](https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/)

Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".

The order of the returned pairs and the order of the strings within each pair does not matter.

```
Sample Input
words = ["diaper", "abc", "test", "cba", "repaid"]

Sample Output
[["diaper", "repaid"], ["abc", "cba"]]
```

<details>
<summary>Brute force approach</summary>
Iterate through the list of words and for each word, iterate through the rest of the words to check if the reverse of the current word is equal to the other word. If it is, add the pair to the result list. Create a helper function to check if two words are palindrome.
</details>

<details>
<summary>Brute force solution</summary>

```js
function semordnilap(words) {
  // Write your code here.
  let result = []
  for (let i = 0; i < words.length; i++) {
    for (let j = i+1; j < words.length; j++) {
      if(words[i].length === words[j].length && isPalindrome(words[i], words[j]))
        result.push([words[i], words[j]])
    }
  }
  return result;
}

function isPalindrome(s1, s2) {
  let p1 = 0
  let p2 = s1.length - 1
  while (p1 < s1.length) {
    if(s1[p1] !== s2[p2])
      return false
    p1++
    p2--
  }
  return true
}

// Time complexity: O(n^2 * m) where n is the number of words and m is the length of each word
// Calculation: O(n^2) for the nested loop and O(m) for the isPalindrome function
// Space complexity: O(n) if we consider the space complexity of the result array
```

</details>

<details>
<summary>Optimized approach</summary>
We can store the words in a set and iterate through the words array to check if the reverse of the current word is in the set. If it is, add the pair to the result list and remove both words from the set. Special case to handle is when the reverse of the word is the same as the word itself.
</details>

<details>
<summary>Optimized solution</summary>

```js
function semordnilap(words) {
  // Write your code here.
  const set = new Set(words)
  const result = []

  for (let i = 0; i < words.length; i++) {
    const reversedStr = words[i].split('').reverse().join('')
    if(set.has(reversedStr) && reversedStr !== words[i]){
      result.push([words[i], reversedStr])
      set.delete(words[i])
      set.delete(reversedStr)
    }
  }
  
  return result;
}

// Time complexity: O(n * m) where n is the number of words and m is the length of each word
// Calculation: O(n) for the loop and O(m) for the split, reverse and join functions each so O(3m) = O(m)
// Space complexity: O(n)
// Calculation: O(n) for the set and O(n) for the result array so O(2n) = O(n)
```
</details>


### Similar Questions

- [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
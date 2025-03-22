## Palindrome check

Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

```
Sample Input
string = "abcdcba"

Sample Output
true // it's written the same forward and backward
```

<details>
<summary>Brute Force Approach 1</summary>
Construct a reversed string and compare it with the original string.
</details>

<details>
<summary>Brute Force Solution 1</summary>

```js

function isPalindrome(string) {
  // Write your code here.
  let reversedStr = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i]
  }
  return string === reversedStr
}

// Time complexity: O(n) or O(n^2) in some languages appending to a string is O(n)
// Space complexity: O(n)
```
</details>

<details>
<summary>Brute Force Approach 2</summary>
Construct a reversed array of the string and then construct the reversed string by joining the array and compare it with the original string.
</details>

<details>
<summary>Brute Force Solution 2</summary>

```js

function isPalindrome(string) {
  // Write your code here.
  let reversedStr = []
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr.push(string[i])
  }
  return string === reversedStr.join('')
}

// Time complexity: O(n)
// Space complexity: O(n)
```
</details>

<details>
<summary>Recursive Approach</summary>
Check if the first and last characters of the string are the same. If they are, check if the substring excluding the first and last characters is a palindrome. Repeat this process until the string is empty or a single character.
</details>

<details>
<summary>Recursive Solution</summary>

```js

function isPalindrome(string, i = 0) {
    // Write your code here.
    let j = string.length - 1 - i
    return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1)
}

// Time complexity: O(n)
// Space complexity: O(n) due to the call stack, it will be O(n/2) but we ignore the constant factor
```
</details>

<details>
<summary>Optimized Approach</summary>

### Algorithm Steps
1. **Initialize Pointers**
    - `p1`: start of string (0)
    - `p2`: end of string (length-1)

2. **Compare Characters**
    - While p1 <= p2:
        - If match: move pointers inward
        - If mismatch: return false

3. **Return Result**
    - If all matches: return true
</details>

<details>
<summary>Optimized Solution</summary>

```js
function isPalindrome(string) {
  // Write your code here.
  let p1 = 0
  let p2 = string.length-1

  while (p1 <= p2) {
    if(string[p1] === string[p2]){
      p1++
      p2--
    } else{
      return false
    }
  }
  return true
}

// Time complexity: O(n)
// Space complexity: O(1)
```
</details>

### Similar Problems

- [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
    <details>
    <summary>Optimized Approach</summary>

    ### Steps:
    1. **Preprocess String**
        - Convert to lowercase
        - Remove non-alphanumeric characters
    
    2. **Initialize Pointers**
        - p1 at start (0)
        - p2 at end (length-1)

    3. **Check Palindrome**
        - Compare characters from both ends
        - Move pointers inward
        - Return false if mismatch found

    </details>

    <details>
    <summary>Optimized Solution</summary>

    ```js
    var isPalindrome = function(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let p1 = 0
        let p2 = s.length-1   

        while (p1 <= p2) {            
            if(s[p1] === s[p2]){
                p1++
                p2--
            } else{
                return false
            }
        }
        return true
    };
    ```
    </details>
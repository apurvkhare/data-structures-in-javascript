## Caesar Cipher Encryptor

Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

```
Sample Input
string = "xyz"
key = 2

Sample Output
"zab"
```

<details>
<summary>Approach 1</summary>

### Algorithm Steps
1. **Initialize**
   - Create empty result array
   - Take input string and key

2. **Process Each Character**
   - Convert to char code
   - Add shifted value (key%26)
   - Handle wrap-around (>122)
   - Convert back to character

3. **Return Result**
   - Join array to string
</details>

<details>
<summary>Solution 1</summary>

```js
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let result = []
  for (let i = 0; i < string.length; i++) {
    let nextCharCode = string.charCodeAt(i) + key%26
    if(nextCharCode > 122){
      nextCharCode = nextCharCode - 122 + 96
    }
    const nextChar =  String.fromCharCode(nextCharCode) 
    result.push(nextChar)
  }

  return result.join('')
}

// Time complexity: O(n)
// Space complexity: O(n)
```
</details>

<details>
<summary>Approach 2</summary>

### Algorithm Steps
1. **Setup**
   - Create alphabet array (a-z)
   - Initialize empty result array
   - Take input string and key

2. **Process Each Character**
   ```javascript
   for each char in string:
     nextIndex = currentIndex + (key % 26)
     if nextIndex > 25:
       nextIndex -= 26
     add shifted character to result
   ```

3. **Return**
   - Join result array into string
</details>

<details>
<summary>Solution 2</summary>

```js
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const result = []
  
  for (let i = 0; i < string.length; i++) {
    let nextCharIndex = alphabets.indexOf(string[i]) + key%26
    if(nextCharIndex > alphabets.length - 1){
      nextCharIndex = nextCharIndex - 26
    }
    result.push(alphabets[nextCharIndex])
  }
  return result.join('')
}

// Time complexity: O(n)
// Space complexity: O(n)
```
</details>

## Similar Problems

- [Shifting Letters](https://leetcode.com/problems/shifting-letters/)

    <details>
    <summary>Approach 1</summary>

    ### Plan
    1. Calculate cumulative shifts from right to left
    2. Apply shifts to each character
    3. Return shifted string

    #### Main Function (`shiftingLetters`)
    1. **Initialize**
        - Empty result array
        - Track cumulative shifts
        - Calculate final shifts array

    2. **Process**
        - Calculate shifts right to left
        - Apply shift to each character
        - Join result array

    #### Helper Function (`shift`)
    1. **Input**: character and shift amount
    2. **Process**: 
        - Find char index in alphabet
        - Apply shift with modulo
        - Handle wrap-around
    3. **Return**: shifted character
    </details>

    <details>
    <summary>Solution 1</summary>

    ```js
    var shiftingLetters = function(s, shifts) {
        let result = []
        let lastShift = 0
        let finalShifts = []

        for(let j = shifts.length-1; j >= 0; j--){
            finalShifts[j] = lastShift + shifts[j]
            lastShift += shifts[j]
        }

        for(let i = 0; i < s.length; i++){
            result.push(shift(s[i], finalShifts[i]))
        }
        return result.join('')
    };

    function shift(char, key) {
        const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

        let nextCharIndex = alphabets.indexOf(char) + key%26
        nextCharIndex = nextCharIndex > 25 ? nextCharIndex - 26 : nextCharIndex

        return alphabets[nextCharIndex]
    }

    // Time complexity: O(n)
    // Space complexity: O(n)
    ```
    </details>


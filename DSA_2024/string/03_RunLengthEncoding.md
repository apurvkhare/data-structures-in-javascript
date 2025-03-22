## Run Length Encoding

Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run `"AAA"` would be run-length-encoded as `"3A"`.

To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run `"AAAAAAAAAAAA"` (12 As), can't naively be encoded as `"12A"`, since this string can be decoded as either `"AAAAAAAAAAAA"` or `"1AA"`. Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as `"9A3A"`.

```
Sample Input
string = "AAAAAAAAAAAAABBCCCCDD"
Sample Output
"9A4A2B4C2D"
```

<details>
<summary>Approach</summary>

1. **Initialize**
   - Empty result array
   - Current run counter = 1

2. **Process String**
    - Compare current char with next char
    - If same AND count < 9:
        - Increment counter
    - If different OR count = 9:
        - Add current count + char to result
        - Reset counter to 1

3. **Handle Last Character**
   - Add final run count and character
</details>

<details>
<summary>Solution</summary>

```js
function runLengthEncoding(string) {
  // Write your code here.
  const result = []
  let currRun = 1
  for (let i = 0; i < string.length - 1; i++) {
    if(string[i+1] === string[i] && currRun < 9){
      currRun++
    } else {
      result.push(`${currRun}${string[i]}`)
      currRun = 1
    }
  }
  result.push(`${currRun}${string[string.length-1]}`)

  return result.join('')
}

// Time complexity: O(n)
// Space complexity: O(n)
```
</details>

### Similar Questions

- [String compression](https://leetcode.com/problems/string-compression/description/)

    <details>
    <summary>Approach</summary>

    1. **Initialize Variables**
    ```javascript
    currRun = 1        // track current run length
    currChar = first   // current character
    index = 0          // position in output array
    ```

    2. **Process String**
    - If same character: increment run
    - If different character:
        - Single char: just add char
        - Run > 9: split digits and add separately
        - Run <= 9: add char + count

    3. **Handle Last Run**
    - Apply same logic as step 2
    - Update final index
    </details>

    <details>
    <summary>Solution</summary>

    ```js
    var compress = function(chars) {
    let currRun = 1
    let currChar = chars[0]
    let index = 0

    for(let i=1; i<chars.length; i++ ){
        if(chars[i-1]===chars[i]){
            currRun++
        } else {
            if(currRun === 1){
                chars[index] = currChar
            } else if(currRun > 9){
                const currRunStr = currRun.toString().split('')
                chars[index] = currChar
                for(let j = 0; j < currRunStr.length; j++){
                    index++
                    chars[index] = currRunStr[j]
                }
            } else {
                chars[index] = currChar
                index++
                chars[index] = currRun.toString()
            }
            index++
            currChar = chars[i]
            currRun = 1
        }
    }

    if(currRun === 1){
        chars[index] = currChar
    } else if(currRun > 9){
        const currRunStr = currRun.toString().split('')
        chars[index] = currChar
        for(let j = 0; j < currRunStr.length; j++){
            index++
            chars[index] = currRunStr[j]
        }
    } else {
        chars[index] = currChar
        index++
        chars[index] = currRun.toString()
    }
    index++

    return index
    };

    // Time complexity: O(n)
    // Space complexity: O(1)
    ```
    </details>
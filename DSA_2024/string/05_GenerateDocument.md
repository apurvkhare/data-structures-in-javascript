## Generate Document

You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one c.

The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string ("").

```
Sample Input
characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"

Sample Output
true
```

<details>
<summary>Brute force approach 1</summary>
Check if the frequency of each character in the document is less than or equal to the frequency of the same character in the characters string. If it is not, return false. If the loop completes, return true.
</details>

<details>
<summary>Brute force solution 1</summary>

```js
function generateDocument(characters, document) {
  // Write your code here.
  for (let i = 0; i < document.length; i++) {
    let documentFrequency = getFrequency(document, document[i])
    let charactersFrequency = getFrequency(characters, document[i])
    if(documentFrequency > charactersFrequency)
      return false
  }
  
  return true;
}

function getFrequency(string, char) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if(char === string[i])
      count++
  }

  return count
}

// Time complexity: O(n * (m + n)) where n is the length of the document and m is the length of the characters
// Space complexity: O(1)
```
</details>

<details>
<summary>Brute force approach 2</summary>
Check if the frequency of each character in the document is less than or equal to the frequency of the same character in the characters string. If it is not, return false. If the loop completes, return true. Use a set to keep track of the characters that have already been counted, so that we don't count them again if they repeat in the document.
</details>

<details>
<summary>Brute force solution 2</summary>

```js
function generateDocument(characters, document) {
  // Write your code here.
  let alreadyCounted = new Set()
  
  for (let i = 0; i < document.length; i++) {
    if(alreadyCounted.has(document[i]))
      continue
    
    let documentFrequency = getFrequency(document, document[i])
    let charactersFrequency = getFrequency(characters, document[i])
    if(documentFrequency > charactersFrequency)
      return false

    alreadyCounted.add(document[i])
  }
  
  return true;
}

function getFrequency(string, char) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if(char === string[i])
      count++
  }

  return count
}

// Time complexity: O(c * (m + n)) where n is the length of the document, m is the length of the characters and c is the number of unique characters in the document
// Space complexity: O(c) where c is the number of unique characters in the document
```
</details>

<details>
<summary>Optimized Approach 1</summary>
Create a map of the characters in the characters string and a map of the characters in the document string. Loop through the document map and check if the frequency of each character in the document is less than or equal to the frequency of the same character in the characters map. If it is not, return false. If the loop completes, return true.
</details>

<details>
<summary>Optimized Solution 1</summary>

```js
function generateDocument(characters, document) {
  // Write your code here.

  const charactersMap = getMap(characters)
  const documentMap = getMap(document)

  let canGenerate = true
  documentMap.forEach((value, key) => {
    if(charactersMap.has(key)){
      if(value > charactersMap.get(key))
        canGenerate = false
    } else{
      canGenerate = false
    }
  })
  
  return canGenerate
}

function getMap(string) {
  const map = new Map()

  for (let j = 0; j < string.length; j++) {
    if(map.has(string[j])){
        map.set(string[j], map.get(string[j])+1)
    } else{
        map.set(string[j], 1)
    }
  }

  return map
}

// Time complexity: O(m + n) where n is the length of the document and m is the length of the characters. 
// Calculation: O(m) + O(n) + O(c) where c is the number of unique characters in the document, in worst case c === n, so O(m + n + c) = O(2n + m) = O(n + m)
// Space complexity: O(c) where c is the number of unique characters in the document
```
</details>

<details>
<summary>Optimized Approach 2</summary>
Create a map of the characters in the characters string. Loop through the characters string and increment the frequency of each character in the map. Loop through the document string and check if the frequency of each character in the document is less than or equal to the frequency of the same character in the characters map. If it is not, return false. If the loop completes, return true.
</details>

<details>
<summary>Optimized Solution 2</summary>

```js
function generateDocument(characters, document) {
  // Write your code here.
  const uniqueCharacters = new Map()

  for (let i = 0; i < characters.length; i++) {
    if(!uniqueCharacters.has(characters[i])){
      uniqueCharacters.set(characters[i], 1)
    } else {
      uniqueCharacters.set(characters[i], uniqueCharacters.get(characters[i]) + 1)
    }
  }

  for (let j = 0; j < document.length; j++) {
    if(!uniqueCharacters.has(document[j]) || uniqueCharacters.get(document[j]) === 0){
      return false
    }
    uniqueCharacters.set(document[j], uniqueCharacters.get(document[j]) - 1)
  }
  
  return true;
}

// Time complexity: O(m + n) where n is the length of the document and m is the length of the characters.
// Space complexity: O(c) where c is the number of unique characters in the document
```
</details>
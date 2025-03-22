## [Line Through Points](https://leetcode.com/problems/max-points-on-a-line/description/)

You're given an array of points plotted on a 2D graph (the xy-plane). Write a function that returns the maximum number of points that a single line (or potentially multiple lines) on the graph passes through.

The input array will contain points represented by an array of two integers [x, y]. The input array will never contain duplicate points and will always contain at least one point.

```
## Sample Input
points = [
  [1, 1],
  [2, 2],
  [3, 3],
  [0, 4],
  [-2, 6],
  [4, 0],
  [2, 1],
]

## Sample Output
4 // A line passes through points: [-2, 6], [0, 4], [2, 2], [4, 0].
```

### Algorithm workflow

- **Initialize**
    - Set maxPoints = 1 (or 0 if empty array)

- **For each point (i)**
    - Create slope map
    - Compare with all other points (j)
    - Calculate slope = (y2-y1)/(x2-x1) or Infinity if x2 === x1
    - Track count of points with same slope

- **Track Maximum**
    - Update maxPoints if current slope has more points
    - Continue until all point pairs checked

```js
function lineThroughPoints(points) {
  // Write your code here.
  let maxPoints = points.length ? 1 : 0

  for (let i = 0; i < points.length - 1; i++) {
    const slopeMap = new Map()
    for (let j = i+1; j < points.length; j++) {
      const x1 = points[i][0]
      const y1 = points[i][1]
      const x2 = points[j][0]
      const y2 = points[j][1]

      let slope = 0
      if(x2 === x1)
        slope = Infinity
      else
        slope = (y2-y1)/(x2-x1)

      if(slopeMap.has(slope))
        slopeMap.set(slope, slopeMap.get(slope) + 1)
      else
        slopeMap.set(slope, 2)

      maxPoints = Math.max(maxPoints, slopeMap.get(slope))
    }
  }
  return maxPoints;
}

// Time complexity - O(n^2) where n is the number of points
// Space complexity - O(n)
```

### Algorithm workflow

- Here we are calculating slope as a fraction to avoid floating point errors

- **Calculate Slope**
    - Calculate xDiff = x1 - x2 and yDiff = y1 - y2
    - Calculate GCD of xDiff and yDiff
    - Divide xDiff and yDiff by GCD
    - Store slope as [yDiff, xDiff]

- **Create Hashable Key**
    - Create a hashable key for fraction as "y:x"
    - Use this key to store in Map

- **Get GCD**
    - 

```js
function lineThroughPoints(points) {
  // Write your code here.
  let maxPoints = points.length ? 1 : 0

  for (let i = 0; i < points.length - 1; i++) {
    const slopeMap = new Map()
    for (let j = i+1; j < points.length; j++) {
      const x1 = points[i][0]
      const y1 = points[i][1]
      const x2 = points[j][0]
      const y2 = points[j][1]

      const [y, x] = calculateSlope(x1, y1, x2, y2)
      const slopeKey = createHashableKeyForFraction(y, x)

      if(slopeMap.has(slopeKey))
        slopeMap.set(slopeKey, slopeMap.get(slopeKey) + 1)
      else
        slopeMap.set(slopeKey, 2)

      maxPoints = Math.max(maxPoints, slopeMap.get(slopeKey))
    }
  }
  return maxPoints;
}

function calculateSlope(x1, y1, x2, y2) {
  let slope = [1,0]

  if(x1 !== x2){
    let xDiff = x1 - x2
    let yDiff = y1 - y2
    let gcd = getGCD(Math.abs(xDiff), Math.abs(yDiff))
    xDiff = Math.floor(xDiff / gcd)
    yDiff = Math.floor(yDiff / gcd)

    if(xDiff < 0){
      xDiff *= -1
      yDiff *= -1
    }

    slope = [yDiff, xDiff]
  }
  return slope
}

function createHashableKeyForFraction(numerator, denominator) {
  return numerator.toString() + ":" + denominator.toString()
}

function getGCD(num1, num2) {
  while (true) {
    if(num1 === 0) 
      return num2
    if(num2 === 0) 
      return num1
    
    const temp = num1
    num1 = num2
    num2 = temp % num2
  }
}

// Time complexity - O(n^2) where n is the number of points
// Space complexity - O(n)
```


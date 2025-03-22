## [Minimum Area Rectangle](https://leetcode.com/problems/minimum-area-rectangle/description/)

You're given an array of points plotted on a 2D graph (the xy-plane). Write a function that returns the minimum area of any rectangle that can be formed using any 4 of these points such that the rectangle's sides are parallel to the x and y axes (i.e., only rectangles with horizontal and vertical sides should be considered--no rectangles with diagonal sides). If no rectangle can be formed, your function should return 0.

The input array will contain points represented by arrays of two integers [x, y]. The input array will never contain duplicate points.

```
Sample Input
points = 
[
  [1, 5],
  [5, 1],
  [4, 2],
  [2, 4],
  [2, 2],
  [1, 2],
  [4, 5],
  [2, 5],
  [-1, -2],
]
Sample Output
3
// The rectangle with corners [1, 5], [2, 5], [1, 2], and [2, 2]
// has the minimum area: 3.
```
### Algorithm workflow

1. Setup
    - Input: Array of [x,y] coordinate points
    - Create Set for O(1) point lookups
    - Initialize minArea as Infinity

2. Core Logic Flow
```
    For each point pair [x1,y1], [x2,y2]:
        if valid diagonal:
            check [x1,y2], [x2,y1] exist
            update minArea if smaller
```

3. Return
    - If no rectangle found: return 0
    - Otherwise: return minimum area

4. Helper function
    - pointToString: Convert [x,y] to string for Set
```js
/*

*/

function minimumAreaRectangle(points) {
  // Write your code here.
  const pointSet = new Set(points.map(point => pointToString(point)))
  let minArea = Infinity

  for (let i = 0; i < points.length; i++) {
    for (let j = i+1; j < points.length; j++) {
      let x1 = points[i][0]
      let y1 = points[i][1]
      let x2 = points[j][0]
      let y2 = points[j][1]
      if(x1 !== x2 && y1 !== y2){
        if(pointSet.has(pointToString([x1, y2])) && pointSet.has(pointToString([x2, y1]))){
          let area = Math.abs(x1 - x2) * Math.abs(y1 - y2)
          minArea = Math.min(minArea, area)
        }
      }
    }
  }
  return minArea === Infinity ? 0 : minArea;
}

function pointToString(point) {
  return point.join(',')
}

// Time complexity - O(n^2) where n is the number of points
// Space complexity - O(n) where n is the number of points
```

```js
/*

*/

// Time complexity - 
// Space complexity -
```
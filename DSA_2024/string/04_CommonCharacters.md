function commonCharacters(words) {
  // Write your code here.
  const smallestString = getSmallestString(words)

  let mainMap = getMap(smallestString)

  for (let k = 0; k < words.length; k++) {
    mainMap = compareMaps(mainMap, getMap(words[k]))
  }

  const result = []
  
  mainMap.forEach((value, key) => {
    for (let m = 0; m < value; m++) {
      result.push(key)
    }
  })
  
  return result;
}

function getSmallestString(words){
  let smallestString = words[0]
  
  for (let i = 1; i < words.length; i++) {
    if(smallestString.length > words[i].length)
      smallestString = words[i]
  }
  
  return smallestString
}

function getMap(string) {
  const map = new Map()

  for (let j = 0; j < string.length; j++) {
    if(map.has(string[j])){
        map.set(string[j], map.get(string[j])+1)
      }
      else{
        map.set(string[j], 1)
      }
  }

  return map
}

function compareMaps(map1, map2){
  map1.forEach((value, key) => {
    if(map2.has(key)){
      if(value > map2.get(key))
        map1.set(key, map2.get(key))
    }else{
      map1.delete(key)
    }
  })

  return map1
}
function minRewards(scores) {
  // Write your code here.
  let leftRewards = [1];
  let rightRewards = [1];
  let resultRewards = [];
  let currentReward = 1;

  for (let i = 1; i < scores.length; i++) {
    if(scores[i-1] > scores[i]){
      currentReward += 1
    } else {
      currentReward = 1      
    }
    
    leftRewards[i] = currentReward
  }

  currentReward = 1;
  
  for (let j = scores.length - 2; j >= 0; j--) {
    if(scores[j+1] > scores[j]){
      currentReward += 1
    } else {
      currentReward = 1      
    }
    
    rightRewards[j] = currentReward
  }

  for (let k = 0; k < scores.length; k++) {
    resultRewards[k] = Math.max(leftRewards[k], rightRewards[k])
  }

  return resultRewards.reduce((acc, reward) => acc + reward)
}

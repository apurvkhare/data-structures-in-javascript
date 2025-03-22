## Tournament winner

There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there
are no ties. 

A team receives 3 points if it wins and 0 points if it loses. 
The winner of the tournament is the team that receives the most amount of points. Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named `competitions` and `results`, respectively. The `competitions` array has elements in the form of `[homeTeam, awayTeam]`, where each team is a string of at most 30 characters representing the name of the team. The `results[i]` denotes the winner of `competitions[i]`, where a `1` in the `results` array means that the home team in the corresponding competition won and a `0` means that the away team won. 

It's guaranteed that exactly one team will win the tournament and that each
team will compete against all other teams exactly once. It's also guaranteed
that the tournament will always have at least two teams. 
```
=> Sample Input

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]
results = [0,0,1]

=> Sample Output

"Python"
```

<details>
  <summary>Brute Force solution approach</summary>
  Create a teamScoreMap to keep track of the score of each team. Then iterate over the teamScoreMap to find the team with the maximum score.
</details>

<details>
  <summary>Brute Force solution</summary>

```js
// BRUTE FORCE
// Two for loops once to create teamScoreMap and another to find the team with 
// maximum score in those

function tournamentWinner(competitions, results) {
  // Write your code here.
  const teamScoreMap = {}
  for(let i = 0; i < results.length; i++){
    if(results[i] === 1) {
      if(teamScoreMap[competitions[i][0]])
        teamScoreMap[competitions[i][0]] += 3
      else 
        teamScoreMap[competitions[i][0]] = 3
      
      if(!teamScoreMap[competitions[i][1]]) 
        teamScoreMap[competitions[i][1]] = 0
    } else if (results[i] === 0) {
      if(teamScoreMap[competitions[i][1]])
        teamScoreMap[competitions[i][1]] += 3
      else
        teamScoreMap[competitions[i][1]] = 3

      if(!teamScoreMap[competitions[i][0]])
        teamScoreMap[competitions[i][0]] = 0
    }
  }

  let maxScoreTeam;
  let maxScore = 0;
  let teams = Object.keys(teamScoreMap);
  for(let j =0; j < teams.length; j++){
    if(teamScoreMap[teams[j]] > maxScore){
      maxScore = teamScoreMap[teams[j]]
      maxScoreTeam = teams[j]
    }
  }
  return maxScoreTeam;
}

// Time complexity - O(n) where n is the number of competitions
// Space complexity - O(k) where k is the number of teams
```
</details>

<details>
  <summary>Optimal solution approach</summary>
  Track the scoreBoard and maxScoreTeam in the same `for` loop.
</details>

<details>
  <summary>Optimal solution</summary>

```js
// track scoreBoard and maxScoreTeam in the same `for` loop

function tournamentWinner(competitions, results) {
  // Write your code here.
  const maxScoreAndTeam = { score: 0, team: '' }
  const scoreBoard = {}

  for(let i = 0; i < competitions.length; i++){
    const winnerIndex = results[i] === 0 ? 1 : 0
    const winner = competitions[i][winnerIndex]
    if(scoreBoard[winner]){
      scoreBoard[winner] += 3
    } else {
      scoreBoard[winner] = 3
    }

    if(scoreBoard[winner] > maxScoreAndTeam.score){
      maxScoreAndTeam.name = winner
      maxScoreAndTeam.score = scoreBoard[winner]
    }
  }
  
  return maxScoreAndTeam.name;
}

// Time complexity - O(n) where n is the number of competitions
// Space complexity - O(k) where k is the number of teams
```
</details>

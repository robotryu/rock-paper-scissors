// randomly return either 'Rock', 'Paper' or 'Scissorcs'
let getComputerChoice = function() {
  let random = Math.floor(Math.random() * 3);
  let pick;

  switch (random) {
    case 0:
      pick = 'Paper'
      break;
    case 1:
      pick = 'Scissors'
      break;
    case 2:
      pick = 'Rock'
      break;
  }
  return pick;
};

// Return the string with first character to uppercase and the rest to lowercase
let formatWord = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

// Get the user pick
let playerPick = function () {
  let userInput = prompt('You choose Rock, Paper or Scissors? ', 'Rock');
  return userInput;
};

// plays a round of rock-paper-scissors only deals with rock input from the user so far
function playRound (playerSelection, computerSelection) {
  let userPick = formatWord(playerSelection);
  console.log(`You picked: ${userPick} and the computer picked: ${computerSelection}`)
  if (userPick === 'Rock' && computerSelection === 'Paper') {
    return 'You Lose! Paper beats Rock';
  } else if (userPick === 'Rock' && computerSelection === 'Scissors') {
    return 'You Win! Rock beats Scissors';
  } else if (userPick === 'Rock' && computerSelection === 'Rock') {
    return 'It\'s a tie play again!';
  }
}

// 6.
// all the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.all the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
  let userScore;
  let computerScore;

  for (let i = 0; i < 5; i++) {
    let result = playRound();
    if (result === 'You Lose! Paper beats Rock') {
      computerScore++;
    } else if (result === 'You Win! Rock beats Scissors') {
      userScore++;
    }
  }
  return `Your final score is: ${userScore} the computer final score is: ${computerScore}.`;
}

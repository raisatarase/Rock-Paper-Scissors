let options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  return options[Math.floor(Math.random() * options.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();
    if (options.includes(playerSelection)) {
      let result =
        playerSelection === computerSelection
          ? `You played: ${playerSelection}, computer played: ${computerSelection}. It's a draw!`
          : (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "rock" && computerSelection === "scissors")
          ? `You played: ${playerSelection}, computer played: ${computerSelection}. You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`
          : "You Lose!";
      return result;
    } else {
      return "Incorrect entry! Please try again...";
    }
  } else {
    return "See you soon!";
  }
};

const game = () => {
  const shouldPlay = confirm("Do you want to play Rock, Paper, Scissors?");

  if (!shouldPlay) {
    console.log("Maybe next time!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`Round ${i + 1}: Enter rock, paper, or scissors! (Press Cancel to stop)`);

    if (playerSelection === null) {
      console.log("Game stopped.");
      break;
    }

    while (!options.includes(playerSelection.trim().toLowerCase())) {
      console.log("Invalid choice. Please try again...");
      playerSelection = prompt(`Round ${i + 1}: Enter rock, paper, or scissors! (Press Cancel to stop)`);
      if (playerSelection === null) {
        console.log("Game stopped.");
        break;
      }
    }

    if (playerSelection === null) {
      break;
    }

    const computerSelection = computerPlay();
    console.log(`Round ${i + 1}:`);
    console.log(playRound(playerSelection, computerSelection));
  }
};

game();

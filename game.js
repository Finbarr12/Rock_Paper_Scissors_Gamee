const choices = ["rock", "paper", "scissors"];

const computersChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "it's a tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win 🎉✨";
  } else {
    return "Computer wins";
  }
};

const updateGame = (playerChoice, computerChoice) => {
  document.getElementById("Player-choice").textContent = playerChoice;
  document.getElementById("computer-choice").textContent = computerChoice;

  const resultElement = document.getElementById("outcome");
  const result = determineWinner(playerChoice, computerChoice);
  resultElement.textContent = result;
};

const makeChoice = (playerChoice) => {
  const computer = computersChoice();
  updateGame(playerChoice, computer);
};

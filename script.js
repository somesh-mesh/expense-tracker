let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrong = document.querySelector('.wrong'); // Corrected to use querySelector for class selection
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random() * 100) + 1;

let numberGuesses = 0;

btn.addEventListener("click", () => {
  guessNumber(); // Corrected the function name
});

function guessNumber() { // Corrected the function name
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrong.innerHTML = "Enter a number between 1 to 100";
  } else {
    numberGuesses++;
    guesses.innerHTML = "No. of Guess: " + numberGuesses;

    if (input.value > answer) {
      wrong.innerHTML = "Your guess is too high!";
      input.value = "";
    } else if (input.value < answer) {
      wrong.innerHTML = "Your guess is too low!";
      input.value = "";
    } else {
      wrong.innerHTML = "Congratulations! You guessed the correct answer!";
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
  }
}

function resetGame() {
  numberGuesses = 0;
  answer = Math.floor(Math.random() * 100) + 1;
  input.value = "";
  guesses.innerHTML = "No. of Guess: 0";
  wrong.innerHTML = "";
}

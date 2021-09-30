window.addEventListener("load", init);

//Global variables to be used within functions

//available levels
const levels = {
  easy: 5,
  medium: 4,
  hard: 3,
};
//to change lvl
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "programmer",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "star",
  "addition",
  "subtraction",
  "divide",
  "multiple",
  "war",
  "friendship",
  "quiet",
  "quit",
  "quilt",
  "taco",
  "burrito",
  "hamburger",
  "pizza",
  "donuts",
  "microsoft",
  "sony",
  "nintendo",
  "netflix",
  "amazon",
  "streaming",
  "hulu",
  "hbo",
  "max",
  "minimun",
  "limit",
  "determined",
  "motivated",
  "driven",
];

//Initialize Game
function init() {
  //show number of seconds in UI
  seconds.innerHTML = currentLevel;
  //Load Word From Array
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener("input", startMatch);
  //Call countdown every second
  setInterval(countdown, 1000);
  //check the game status
  setInterval(checkStatus, 50);
}

//start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  //If score is negative one display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
//match the currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//Pick and Show Random Word
function showWord(words) {
  //Generate Random Array Index
  const randIndex = Math.floor(Math.random() * words.length);
  //Output a Random Word
  currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
  //make sure time is not run out
  if (time > 0) {
    //Decrease the time
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;
}
//Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}

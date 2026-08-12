const wordsBox = document.getElementById('words-box');
const timerDisplay = document.getElementById('timer');
const catSprite = document.getElementById('cat-sprite');
const results = document.getElementById('results');
const resultWpm = document.getElementById('result-wpm');
const currentWpm = document.getElementById('wpm');
const options = document.querySelector(`.options`);
const lifetimeGames = document.getElementById('lifetime-games');
const lifetimeWpm = document.getElementById('lifetime-wpm');
const currentAccuracy = document.getElementById('accuracy');
const resultAccuracy = document.getElementById('result-accuracy');
const lifetimeAccuracy = document.getElementById('lifetime-accuracy');
const bestAccuracyElem = document.getElementById('best-accuracy');
const bestWpmElem = document.getElementById('best-wpm');

const shareButton = document.getElementById('share-button');
const statsPanel = document.querySelector('.stats-panel');

let letters = [];
let currentIndex = 0;
let correctCount = 0;
let totalStrokes = 0;
let selectedTime = 30;
let selectedAmount = 25;
let timeLeft = selectedTime;
let timer = null;
let calculator = null;
let startTime = null;
let hasStarted = false;
let isOver = false;
let selectedMode = "normal";

let totalWpm = Number(localStorage.getItem('totalWpm')) || 0;
let totalPlays = Number(localStorage.getItem('totalPlays')) || 0;
let totalAccuracy = Number(localStorage.getItem('totalAccuracy')) || 0;
let bestWPM = Number(localStorage.getItem('bestWPM')) || 0;
let bestAccuracy = Number(localStorage.getItem('bestAccuracy')) || 0;

let words = englishWords;

shareButton.addEventListener("click", (e) => {
  htmlToImage
    .toBlob(statsPanel, {
      width: statsPanel.offsetWidth,
      height: statsPanel.offsetHeight,
      scrollX: 0,
      scrollY: 0,
      pixelRatio: 2,
      backgroundColor: null
    })
    .then(function (blob) {
      if (window.saveAs) {
        window.saveAs(blob, 'TomType-Stats.png'); 
      } else {
        FileSaver.saveAs(blob, 'TomType-Stats.png');
      }
    });
});

options.addEventListener("click", (e) => {
  
  if (e.target.classList.contains('word-opt')) {
    setActiveButton(e.target);
    const button = e.target.innerText;
    if (button == "Quotes") {
      words = quotes;
    } else {
      words = eval(button.toLowerCase() + "Words");
    }
    reset();
  }

  if (e.target.classList.contains('time-opt')) {
    setActiveButton(e.target);
    const time = parseInt(e.target.getAttribute('data-time'), 10);
    if (!isNaN(time)) {
      selectedTime = time;
      reset();
    }
  }

  if (e.target.classList.contains('amount-opt')) {
    setActiveButton(e.target);
    const amount = parseInt(e.target.getAttribute('data-amount'), 10);
    if (!isNaN(amount)) {
      selectedAmount = amount;
      reset();
    }
  }

  if (e.target.classList.contains('mode-opt')) {
    setActiveButton(e.target);
    const mode = e.target.innerText.toLowerCase();
    if (mode) {
      selectedMode = mode;
      reset();
    }
  }
  
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Tab") {
    e.preventDefault();
    reset();
  }
  
  if (e.key == 'Enter') {
    e.preventDefault();
  }
})

document.addEventListener("keydown", (e) => { 
  const soundInstance = typeAudio.cloneNode();
  soundInstance.play().catch(err => console.log("Audio play blocked:", err));
  
  if ((e.key.length > 1 && e.key !== "Backspace") || isOver) return;
  
  if (e.key == " " || e.key == "'" || e.key == '/') {
    e.preventDefault();
  }
  
  
  
  if (!hasStarted) {
    start();
    hasStarted = true;
    startTime = Date.now();
  }
  
  const currentLetter = letters[currentIndex];
  if (e.key == "Backspace") {
    if (currentIndex > 0) {
      if (letters[currentIndex]) {
        currentLetter.classList.remove("active", "correct", "incorrect");
      }
      currentIndex--;
      letters[currentIndex].classList.add("active");
      letters[currentIndex].classList.remove("correct", "incorrect");
    }
    return;
  }
  
  if (currentIndex < letters.length) {
    totalStrokes++;
    
    if (e.key == currentLetter.innerText) {
      currentLetter.classList.add("correct");
      correctCount++;
    } else if (selectedMode == "normal") {
      currentLetter.classList.add("incorrect");
    } else {
      currentLetter.classList.add("incorrect");
      endGame();
    }
    
    const accuracy = Math.round((correctCount / totalStrokes) * 100);
    currentAccuracy.innerText = accuracy + "%";
    
    currentLetter.classList.remove("active");
    currentIndex++;
    
    if (currentIndex < letters.length) {
      letters[currentIndex].classList.add("active");
    } else if (letters[currentIndex - 1].classList.contains("correct")) {
      endGame();
    }
    
    const progress = (currentIndex / letters.length) * 80;
    catSprite.style.left = `${Math.min(progress, 80)}%`;
  } 
});

function setActiveButton(button) {
  const buttons = button.parentElement.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.classList.remove('active-btn');
  });
  button.classList.add('active-btn');
}

function updateStats() {
  if (lifetimeGames && lifetimeWpm) {
    checkStreak();

    streak.innerText = currentStreak;

    lifetimeGames.innerText = totalPlays;
    
    let avgWpm = 0;
    let avgAccuracy = 100;
    if (totalPlays > 0) {
      avgWpm = Math.round(totalWpm / totalPlays)
      avgAccuracy = Math.round(totalAccuracy / totalPlays);
    }

    lifetimeWpm.innerText = avgWpm + " WPM";
    bestWpmElem.innerText = bestWPM + " WPM";
    lifetimeAccuracy.innerText = avgAccuracy + "%";
    bestAccuracyElem.innerText = bestAccuracy + "%";

  } 
}

function saveStats(wpm, accuracy) {
  totalWpm += wpm;
  totalAccuracy += accuracy;
  totalPlays++;

  if (wpm > bestWPM) {
    bestWPM = wpm;
  }

  if (accuracy > bestAccuracy) {
    bestAccuracy = accuracy;
  }
  
  localStorage.setItem("totalAccuracy", totalAccuracy);
  localStorage.setItem("totalWpm", totalWpm);
  localStorage.setItem("totalPlays", totalPlays);
  localStorage.setItem("bestWPM", bestWPM);
  localStorage.setItem("bestAccuracy", bestAccuracy);
  
  updateStats();
}

function start() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft + "s";
    
    if (timeLeft <= 0 || isOver) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
  
  calculator = setInterval(calculateWPM, 200);
}

function calculateWPM() {
  const elapsedSeconds = (Date.now() - startTime) / 1000;
  const wpm = Math.round((correctCount / 5) / (elapsedSeconds / 60));
  currentWpm.innerText = wpm + " WPM";
  
  if (timeLeft <= 0 || isOver) {
    clearInterval(calculator);
    return;
  }
}

function endGame() {
  if (isOver) return;
  
  const elapsedSeconds = (Date.now() - startTime) / 1000;
  const wpm = Math.round((correctCount / 5) / (elapsedSeconds / 60));
  const accuracy = Math.round((correctCount / totalStrokes) * 100);
  
  resultWpm.innerText = wpm;
  resultAccuracy.innerText = accuracy;
  
  results.classList.remove("hidden");
  isOver = true;
  
  updateStreak();
  saveStats(wpm, accuracy);
}

function reset() {
  clearInterval(timer);
  clearInterval(calculator);
  timer = null;
  calculator = null;
  hasStarted = false;
  isOver = false;
  currentIndex = 0;
  correctCount = 0;
  totalStrokes = 0;
  timeLeft = selectedTime;
  timerDisplay.innerText = selectedTime + "s";
  currentWpm.innerHTML = "0 WPM";
  currentAccuracy.innerText = "100%"
  catSprite.style.left = "10px";

  results.classList.add("hidden");
  
  render();
  
}

function render() {
  wordsBox.innerHTML = '';
  
  let selectedWords = [];
  if (words == quotes) {
    const selectedQuote = Math.floor(Math.random() * words.length);
    const quoteString = quotes[selectedQuote];
    selectedWords = quoteString.split(" ");
  } else {
    for (let i = 0; i < selectedAmount; i++) {
      const index = Math.floor(Math.random() * words.length);
      selectedWords.push(words[index]);
    }
  }
  
  
  const text = selectedWords.join(" ");
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.classList.add("letter");
    if (index == 0) {
      span.classList.add("active");
    }
    wordsBox.appendChild(span);
  });
  
  letters = document.querySelectorAll(`.letter`);
}

updateStats();
render();

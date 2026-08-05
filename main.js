const englishWords = [
  "apple", "river", "mountain", "shadow", "whisper", "garden", "cloud", "ocean",
  "breeze", "forest", "window", "blanket", "lantern", "silence", "echo",
  "mirror", "castle", "desert", "feather", "harbor", "thunder", "spark", "meadow",
  "riddle", "statue", "valley", "compass", "horizon", "velvet", "shelter", "winter",
  "summer", "autumn", "spring", "planet", "galaxy", "starlight", "timber", "canyon",
  "bridge", "village", "fountain", "island", "journey", "orchard", "crystal", "palace",
  "silver", "golden", "copper", "iron", "stone", "marble", "granite", "blossom",
  "willow", "maple", "cedar", "birch", "pebble", "stream", "cascade", "sunset",
  "sunrise", "twilight", "midnight", "morning", "evening", "pattern", "texture", "rhythm",
  "melody", "harmony", "canvas", "sketch", "legend", "beacon", "voyage", "summit",
  "glacier", "tide", "wave", "current", "boulder", "cliff", "cavern", "tunnel",
  "highway", "pathway", "sidewalk", "balcony", "chimney", "doorway", "kitchen", "attic",
  "cellar", "hallway", "cabinet", "pillow", "curtain", "flame", "candle", "pioneer", 
  "scholar", "painter", "writer", "runner", "sailor", "scout"
];

const catWords = [
  "kitten", "purr", "whiskers", "pounce", "scratch", "meow", "kibble", "catnip",
  "nap", "paws", "furry", "tail", "laser", "yawn", "claws", "cozy", "sleepy",
  "cuddle", "feline", "hiss", "tabby", "calico", "groom", "stretch", "litter",
  "perch", "sunbeam", "biscuit", "headbutt", "knead", "prowl", "panther", "shelter",
  "rescue", "collar", "bell", "toy", "mouse", "feather", "box", "climb", "leap",
  "chase", "swat", "fluffy", "shedding", "grooming", "sleeping", "napping", "snuggle",
  "purring", "meowing", "hissing", "prowling", "leaping", "climbing", "swatting",
  "scratching", "stretching", "pouncing", "snuggles", "whiskered", "playful", "curious",
  "stealthy", "agile", "graceful", "nocturnal", "carnivore", "predator", "hunter",
  "pawsome", "meowmix", "treats", "salmon", "tuna", "poultry", "waterbowl", "scratchpost",
  "cattree", "litterbox", "carrier", "vet", "vaccine", "microchip", "spay", "neuter",
  "stray", "feral", "domestic", "breed", "siamese", "persian", "ragdoll", "maine",
  "coon", "bengal", "sphynx", "shorthair", "longhair", "fold", "bobtail", "manx",
  "munchkin", "abyssinian", "birman", "burmese", "chartreux", "korat", "somali",
  "singapura", "balinese", "javanese", "tonkinese", "toyger", "ocicat", "mist"
];

const techWords = [
  "javascript", "typescript", "python", "java", "golang", "rust", "kotlin", "swift",
  "php", "ruby", "csharp", "html", "css", "sql", "bash", "node", "bun", "deno",
  "react", "vue", "angular", "svelte", "nextjs", "nuxt", "phaser", "dom", "element",
  "component", "state", "props", "hook", "flexbox", "grid", "canvas", "render",
  "styling", "asset", "viewport", "responsive", "bundle", "webpack", "vite",
  "class", "object", "interface", "function", "method", "variable", "constant",
  "array", "string", "boolean", "integer", "float", "pointer", "buffer", "stream",
  "promise", "async", "await", "loop", "recursion", "syntax", "compiler", "runtime",
  "package", "module", "library", "framework", "inherit", "instance",
  "algorithm", "database", "query", "index", "schema", "server", "client", "request",
  "response", "endpoint", "router", "session", "cookie", "token", "auth", "cache",
  "memory", "thread", "process", "kernel", "binary", "system", "network", "socket",
  "terminal", "git", "github", "commit", "branch", "merge", "pull", "push", "deploy",
  "docker", "container", "linux", "ubuntu", "command", "script", "config", "build",
  "sprite", "vector", "matrix", "physics", "collision", "particle", "delta", "tick",
  "event", "listener", "payload", "handler", "debugger", "stack", "overflow"
];

const italianWords = [
  "pizza", "pasta", "ciao", "amore", "sole", "mare", "vita", "bella",
  "mondo", "cuore", "tempo", "notte", "giorno", "festa", "caffè", "gelato",
  "amico", "famiglia", "casa", "strada", "piazza", "terra", "fuoco", "acqua",
  "luce", "ombra", "vento", "fiume", "isola", "monte", "bosco", "fiore",
  "albero", "stella", "luna", "cielo", "musica", "arte", "storia", "libro",
  "penna", "parola", "voce", "suono", "sogno", "viaggio", "città",
  "paese", "stazione", "treno", "volo", "lavoro", "studio", "scuola",
  "mente", "pensiero", "forza", "coraggio", "pace", "gioia", "sorriso", "sguardo",
  "mano", "testa", "occhio", "bocca", "porta", "finestra", "tavolo", "sedia",
  "piatto", "pane", "vino", "formaggio", "sapore", "dolce", "caldo", "freddo",
  "nuovo", "vecchio", "grande", "piccolo", "veloce", "lento", "chiaro", "scuro",
  "primo", "ultimo", "sempre", "mai", "adesso", "domani", "ieri", "insieme",
  "subito", "vicino", "lontano", "aperto", "chiuso", "pronto", "giusto", "vero",
  "forte", "debole", "ricco", "povero", "felice", "triste", "secolo"
];

const quotes = [
  "Be yourself; everyone else is already taken.",
  "In the middle of difficulty lies opportunity.",
  "It always seems impossible until it's done.",
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "Do one thing every day that scares you.",
  "Everything you can imagine is real.",
  "Turn your wounds into wisdom.",
  "Simplicity is the ultimate sophistication.",
  "Not all those who wander are lost.",
  "Happiness depends upon ourselves.",
  "Whatever you are, be a good one.",
  "What we think, we become.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "An unexamined life is not worth living.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Believe you can and you're halfway there.",
  "That which does not kill us makes us stronger.",
  "The journey of a thousand miles begins with one step.",
  "Keep your face always toward the sunshine and shadows will fall behind you.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "The only true wisdom is in knowing you know nothing.",
  "Stay hungry, stay foolish.",
  "Act as if what you do makes a difference. It does.",
  "Dream big and dare to fail.",
  "Light tomorrow with today.",
  "It is never too late to be what you might have been.",
  "If you tell the truth, you don't have to remember anything.",
  "Try to be a rainbow in someone's cloud.",
  "No pressure, no diamonds."
];

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
const themeButton = document.getElementById('toggle-button');
const streak = document.getElementById('streak');

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
let savedTheme = localStorage.getItem("theme");
let currentStreak = Number(localStorage.getItem('streak')) || 0;
let lastActive = localStorage.getItem('lastActive') || null;

const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = savedTheme || (systemDark ? 'dark' : 'light');
applyTheme(theme);

let words = englishWords;

options.addEventListener("click", (e) => {
  
  if (e.target.classList.contains('word-opt')) {
    const button = e.target.innerText;
    if (button == "Quotes") {
      words = quotes;
    } else {
      words = eval(button.toLowerCase() + "Words");
    }
    
    reset();
  }

  if (e.target.classList.contains('time-opt')) {
    const time = parseInt(e.target.getAttribute('data-time'), 10);
    if (!isNaN(time)) {
      selectedTime = time;
      reset();
    }
  }

  if (e.target.classList.contains('amount-opt')) {
    const amount = parseInt(e.target.getAttribute('data-amount'), 10);
    if (!isNaN(amount)) {
      selectedAmount = amount;
      reset();
    }
  }

  if (e.target.classList.contains('mode-opt')) {
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
  
  const typeAudio = new Audio("sound/type_03.mp3");
  typeAudio.preload = "auto";
  
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


themeButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  let newTheme;
  if (currentTheme == 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});


window.matchMedia('(prefers-color-scheme: dark').addEventListener('change', (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

function getDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDaysPassed(lastActive, today) {
  const [y1, m1, d1] = lastActive.split('-').map(Number);
  const [y2, m2, d2] = today.split('-').map(Number);

  const lastActiveDate = new Date(y1, m1-1, d1);
  const todayDate = new Date(y2, m2-1, d2);
  
  const diffTime = todayDate - lastActiveDate;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function checkStreak() {
  if (lastActive) {
    console.log("checking streak");
    const today = getDate(new Date());
    const daysPassed = getDaysPassed(lastActive, today);

    if (daysPassed > 1) {
      currentStreak = 0;
      localStorage.setItem('streak', 0);
    }
  }
}

function updateStreak() {
  console.log("updating streak");
  const today = getDate(new Date());

  if (!lastActive) {
    currentStreak = 1;
    console.log("boop");
  } else {
    const daysPassed = getDaysPassed(lastActive, today);

    if (daysPassed == 1) {
      currentStreak++;
      console.log("updated");
    } else if (daysPassed > 1) {
      currentStreak = 1;
      console.log("reset");
    }
  }

  lastActive = today;
  localStorage.setItem('streak', currentStreak);
  localStorage.setItem('lastActive', lastActive);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  if (theme == 'dark') {
    themeButton.innerText = "☀️";
  } else {
    themeButton.innerText = "🌙";
  }
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

const englishWords = [
  "apple", "river", "mountain", "shadow", "whisper", "garden", "cloud", "ocean",
  "breeze", "forest", "window", "blanket", "lantern", "journey", "silence", "echo",
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
  "cellar", "hallway", "cabinet", "pillow", "curtain", "flame", "candle", "beacon",
  "voyage", "pioneer", "scholar", "painter", "writer", "runner", "sailor", "scout"
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
  "package", "module", "library", "framework", "inherit", "instance", "method",
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
  "penna", "parola", "voce", "suono", "sogno", "viaggio", "strada", "città",
  "paese", "stazione", "treno", "volo", "strada", "lavoro", "studio", "scuola",
  "mente", "pensiero", "forza", "coraggio", "pace", "gioia", "sorriso", "sguardo",
  "mano", "testa", "occhio", "bocca", "porta", "finestra", "tavolo", "sedia",
  "piatto", "pane", "vino", "formaggio", "sapore", "dolce", "caldo", "freddo",
  "nuovo", "vecchio", "grande", "piccolo", "veloce", "lento", "chiaro", "scuro",
  "primo", "ultimo", "sempre", "mai", "adesso", "domani", "ieri", "insieme",
  "subito", "vicino", "lontano", "aperto", "chiuso", "pronto", "giusto", "vero",
  "forte", "debole", "ricco", "povero", "felice", "triste", "primo", "secolo"
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

let letters = [];
let currentIndex = 0;
let correctCount = 0;
let timeLeft = 35;
let timer = null;
let calculator = null;
let startTime = null;
let hasStarted = false;
let isOver = false;

let totalWpm = Number(localStorage.getItem('totalWpm')) || 0;
let totalPlays = Number(localStorage.getItem('totalPlays')) || 0;

let words = englishWords;


function updateStats() {
  if (lifetimeGames && lifetimeWpm) {
    lifetimeGames.innerText = totalPlays;
    let avg = 0;
    if (totalPlays > 0) {
      avg = Math.round(totalWpm / totalPlays)
    }
    lifetimeWpm.innerText = avg + " WPM";
    console.log(avg)
  } 
}

function saveStats(wpm) {
  totalWpm += wpm;
  totalPlays++;
  
  localStorage.setItem("totalWpm", totalWpm);
  localStorage.setItem("totalPlays", totalPlays);
  
  updateStats();
}

options.addEventListener("click", (e) => {
  
  let button = e.target.innerText;
  if (button == "Quotes") {
    words = quotes;
  } else {
    words = eval(button.toLowerCase() + "Words");
  }
  
  reset();
  
});

function reset() {
  clearInterval(timer);
  clearInterval(calculator);
  timer = null;
  calculator = null;
  hasStarted = false;
  isOver = false;
  currentIndex = 0;
  correctCount = 0;
  timeLeft = 35;
  timerDisplay.innerText = "35s";
  currentWpm.innerHTML = "0 WPM";
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
    for (let i = 0; i < 20; i++) {
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
    
    if (e.key == currentLetter.innerText) {
      currentLetter.classList.add("correct");
      correctCount++;
    } else {
      currentLetter.classList.add("incorrect");
    }
    
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
  resultWpm.innerText = wpm;
  results.classList.remove("hidden");
  isOver = true;
  
  saveStats(wpm);
}

updateStats();
render();

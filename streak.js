const streak = document.getElementById('streak');

let currentStreak = Number(localStorage.getItem('streak')) || 0;
let lastActive = localStorage.getItem('lastActive') || null;

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

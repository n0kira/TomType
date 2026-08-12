const themeButton = document.getElementById('toggle-button');

let savedTheme = localStorage.getItem("theme");
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = savedTheme || (systemDark ? 'dark' : 'light');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  if (theme == 'dark') {
    themeButton.innerText = "☀️";
  } else {
    themeButton.innerText = "🌙";
  }
}

applyTheme(theme);

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

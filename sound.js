const typeAudio = new Audio("sound/type_03.mp3");
const uiAudio = new Audio("sound/tap_03.mp3");

typeAudio.preload = "auto";
uiAudio.preload = "autio";

document.querySelectorAll(`button`).forEach((btn) => {
  btn.addEventListener("click", () => {
      const soundInstance = uiAudio.cloneNode();
      soundInstance.play().catch(err => console.log("Audio play blocked:", err));
  });
});

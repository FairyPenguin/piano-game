const keys = document.querySelectorAll(".key");
const whiteKey = document.querySelectorAll(".white-key");
const blackKey = document.querySelectorAll(".black-key");

function playSound(newURL) {
  new Audio(newURL).play();
}

keys.forEach((pianoKey, i) => {
  const number = i < 9 ? "0" + (i + 1) : i + 1;
  const newURL = "sounds/key" + number + ".mp3";
  pianoKey.addEventListener("click", () => playSound(newURL));
});

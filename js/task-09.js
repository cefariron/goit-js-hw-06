const body = document.querySelector("body")
const btn = document.querySelector(".change-color")
const span = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", handleClick)

function handleClick() {
  body.setAttribute("style", `background-color: ${getRandomHexColor()}`)
  span.textContent = getRandomHexColor();
}

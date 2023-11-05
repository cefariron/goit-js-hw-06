const fontInput = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

fontInput.addEventListener("input", handleRange)

function handleRange(event) {
    let value = fontInput.value;
    text.setAttribute("style", `font-size: ${value}px;`)
}
const fontInput = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

fontInput.value = 24;
text.setAttribute("style", `font-size: ${fontInput.value}px;`);

fontInput.addEventListener("input", () => {
    text.setAttribute("style", `font-size: ${fontInput.value}px;`)
});
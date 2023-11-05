const btnMin = document.querySelector('button[data-action="decrement"]')
const btnMax = document.querySelector('button[data-action="increment"]')
const counter = document.querySelector("#value")

let counterValue = 0;
console.log(counterValue);

btnMax.addEventListener("click", handleMax)
btnMin.addEventListener("click", handleMin)


function handleMax() {
    counterValue += 1
    counter.textContent = counterValue;
}

function handleMin() {
    counterValue -= 1
    counter.textContent = counterValue;
}
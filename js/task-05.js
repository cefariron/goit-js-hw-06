const userName = document.querySelector("#name-input")
const inputValue = document.querySelector("#name-output")

userName.addEventListener("input", handleInput)

function handleInput(event) {
    if(!event.currentTarget.value){
        inputValue.textContent = "Anonymous";
    } else {
        inputValue.textContent = event.currentTarget.value;
    }
}

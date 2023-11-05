const userName = document.querySelector("#validation-input")

userName.addEventListener("blur", handleBlur)

function handleBlur(event) {
    const name = event.currentTarget.value;

    if(name.length < userName.dataset.length) {
        userName.setAttribute("style", "border-color: #f44336;");
    } else {
        userName.setAttribute("style", "border-color: #4caf50;");
    }
}
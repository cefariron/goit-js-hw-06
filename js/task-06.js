const userName = document.querySelector("#validation-input")

userName.addEventListener("blur", handleBlur)

function handleBlur(event) {
    const name = event.currentTarget.value;

    if(name.length === 6) {
        userName.classList.remove("invalid"); 
        userName.classList.add("valid"); 
    } else {
        userName.classList.remove("valid"); 
        userName.classList.add("invalid"); 
    }
}
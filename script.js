const submitButton = document.getElementById("submit-button");
const password = document.getElementById("password");
const confirm = document.getElementById("password-confirm");
const error = document.querySelector("#error");

error.classList.add("deactivated");

submitButton.addEventListener('click', passCheck);

function passCheck() {
    if (password.value === confirm.value) {
        confirm.setCustomValidity('');
        error.classList.remove("activated");
    } else {
        confirm.setCustomValidity("Passwords do not match");
        error.classList.add("activated");
    }
}
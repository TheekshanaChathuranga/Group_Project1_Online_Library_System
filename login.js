// JavaScript source code
function validate(event) {
    event.preventDefault();

    let username = document.myForm.username.value;
    let password = document.myForm.password.value;

    let nameError = document.getElementById("nameError");
    let pwdError = document.getElementById("pwdError");

    nameError.innerHTML = "";
    pwdError.innerHTML = "";

    let isValid = true;

    if (username == null || username == "") {
        nameError.innerHTML = "User name is required";
        isValid = false;
    }
    if (password == null || password == "") {
        pwdError.innerHTML = "Password is required";
        isValid = false;
    }

    if (username == "admin" && password == "1234") {
        alert("login successfully");
        window.location.href = "admin.html"
        return false;

    }
    if (isValid) {
        alert("login successfully");
        window.location.href = "home.html";
        return true;
    } else {
        return false;
    }

}
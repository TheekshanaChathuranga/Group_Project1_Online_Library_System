// JavaScript source code

function formvalidate(event) {
    event.preventDefault();

    let username = document.myForm.name.value;
    let email = document.myForm.email.value;
    let phoneNo = document.myForm.phoneNo.value;
    let password1 = document.myForm.password1.value;
    let password2 = document.myForm.password2.value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let NoError = document.getElementById("NoError");
    let pwdError = document.getElementById("pwdError");
    let pwd2Error = document.getElementById("pwd2Error");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    NoError.innerHTML = "";
    pwdError.innerHTML = "";
    pwd2Error.innerHTML = "";

    let isValid = true;

    if (username == null || username == "") {
        nameError.innerHTML = "User name is required";
        isValid = false;
    }

    if (email == null || email == "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.innerHTML = "Invalid Email";
        isValid = false;
    }

    if (phoneNo == null || phoneNo == "") {
        NoError.innerHTML = "Mobile number is required";
        isValid = false;
    } else if (!/^\d+$/.test(phoneNo)) {
        NoError.innerHTML = "Invalid mobile number";
        isValid = false;

    }

        if (password1 == null || password1 == "") {
            pwdError.innerHTML = "Password is required";
            isValid = false;
        }

        if (password2 == null || password2 == "" || password2 !== password1) {
            pwd2Error.innerHTML = "Password is not matching";
            isValid = false;
        }

        if (isValid) {
            alert("Registered successfully");
            window.location.href = "home.html";
            return true;
        } else {
            return false;
        }
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addOnClickListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "joshua" && password === "testing") {
        alert("You have successfully logged in");
        location.reload();
    } else {
        alert("Invalid username or password");
    }
})

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user" && password === "web") {
//         alert("You have successfully logged in.");
//         location.reload();
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })
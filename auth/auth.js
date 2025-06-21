const signupButton = document.getElementById("signup");
const loginButton = document.getElementById("login");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

signupButton.addEventListener("click", function () {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

loginButton.addEventListener("click", function () {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

// LOGIN VALIDATION
document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const username = document.querySelector("#loginForm #username").value.trim();
    const password = document.querySelector("#loginForm #password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
        return;
    }

    // For now, just show success message
    alert("Login form submitted successfully!");
});


// SIGNUP VALIDATION
document.getElementById("signupBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const username = document.querySelector("#signupForm #username").value.trim();
    const email = document.querySelector("#signupForm #email").value.trim();
    const password = document.querySelector("#signupForm #password").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username === "" || email === "" || password === "") {
        alert("Please fill all the fields.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 69) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // For now, just show success message
    alert("Signup form submitted successfully!");
});
signupForm.classList.add("fade");
loginForm.classList.add("fade");

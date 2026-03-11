const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//  show error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerText = message;
}

// show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// email check
function isValidEmail(emailValue) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
}

// ACTIVE validation while typing
username.addEventListener("input", () => {
  if (username.value.trim().length < 3) {
    showError(username, "Username must be at least 3 characters");
  } else {
    showSuccess(username);
  }
});

email.addEventListener("input", () => {
  if (!isValidEmail(email.value.trim())) {
    showError(email, "Enter a valid email");
  } else {
    showSuccess(email);
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
  } else {
    showSuccess(password);
  }
});

password2.addEventListener("input", () => {
  if (password2.value !== password.value || password2.value === "") {
    showError(password2, "Passwords do not match");
  } else {
    showSuccess(password2);
  }
});

// 🚀 submit check
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    username.parentElement.classList.contains("success") &&
    email.parentElement.classList.contains("success") &&
    password.parentElement.classList.contains("success") &&
    password2.parentElement.classList.contains("success")
  ) {
    alert("Form submitted successfully!");
    form.reset();
    document.querySelectorAll(".form-control").forEach(fc => {
      fc.className = "form-control";
    });
  } else {
    alert("Please fix errors before submitting.");
  }
});
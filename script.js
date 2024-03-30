document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.querySelector("input[type='text']").value;
      var password = document.querySelector("input[type='password']").value;

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      if (!emailPattern.test(email) || !passwordPattern.test(password)) {
        document.getElementById("error-message").textContent =
          "Email atau password tidak valid.";
        return;
      }

      if (document.getElementById("remember-me").checked) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      alert("Login berhasil!");
      window.location.href = "dashboard.html";
    });

  var savedEmail = localStorage.getItem("email");
  var savedPassword = localStorage.getItem("password");
  if (savedEmail && savedPassword) {
    document.querySelector("input[type='text']").value = savedEmail;
    document.querySelector("input[type='password']").value = savedPassword;
    document.getElementById("remember-me").checked = true;
  }

  document
    .getElementById("forgot-password-link")
    .addEventListener("click", function (event) {
      event.preventDefault();

      alert("Redirect ke halaman reset password");
    });

  alert("Login berhasil!");
  window.location.href = "dashboard.html";
});

document
  .getElementById("signup-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "signup.html";
  });

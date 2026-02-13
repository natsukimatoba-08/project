document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Fake authentication
    const user = { email: email };

    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  });
});

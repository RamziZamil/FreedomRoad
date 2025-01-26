document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Regex patterns for validation
    const usernameRegex = /^[a-zA-Z0-9_]{5,20}$/; // 5-20 characters, letters, numbers, underscore
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // Min 6 chars, at least one letter, one number

    // Validation checks
    if (!usernameRegex.test(username)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Username",
        text: "Username must be 5-20 characters and can contain letters, numbers, and underscores.",
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 8 characters long and contain at least one letter and one number.",
      });
      return;
    }

    // Success message if validation passes
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You have logged in successfully!",
      showConfirmButton: false,
      timer: 2000,
    });

    // Simulate form submission after validation
    setTimeout(() => {
      document.getElementById("loginForm").submit();
    }, 2000);
  });

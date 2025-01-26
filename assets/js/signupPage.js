document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Regex patterns
    const usernameRegex = /^[a-zA-Z0-9_]{5,20}$/; // 5-20 characters, letters, numbers, underscore
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Standard email regex
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Min 8 chars, at least one letter, one number, one special char

    // Validation checks with SweetAlert
    if (!usernameRegex.test(username)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Username",
        text: "Username must be 5-20 characters and can contain letters, numbers, and underscores.",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 8 characters long, include a letter, a number, and a special character.",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match! Please try again.",
      });
      return;
    }

    // If all inputs are valid
    Swal.fire({
      icon: "success",
      title: "Signup Successful!",
      text: "Your account has been created successfully.",
      showConfirmButton: false,
      timer: 2000,
    });

    // You can submit the form data to the server here
  });

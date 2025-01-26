document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // Regular expressions for validation
  const regexPatterns = {
    name: /^[A-Za-z\s]{3,50}$/, // Letters and spaces, 3 to 50 characters
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Valid email format
    phone: /^\+?[0-9]{7,15}$/, // Numbers with optional '+' and 7-15 digits
    message: /^.{10,500}$/, // Message length between 10 and 500 characters
  };

  // Function to validate input fields
  function validateInput(input, regex) {
    if (regex.test(input.value.trim())) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
    }
  }

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Validate name
    if (!validateInput(document.getElementById("name"), regexPatterns.name)) {
      isValid = false;
    }

    // Validate email
    if (!validateInput(document.getElementById("email"), regexPatterns.email)) {
      isValid = false;
    }

    // Validate phone
    if (!validateInput(document.getElementById("phone"), regexPatterns.phone)) {
      isValid = false;
    }

    // Validate message
    if (
      !validateInput(document.getElementById("message"), regexPatterns.message)
    ) {
      isValid = false;
    }

    // Check if terms are agreed
    const terms = document.getElementById("terms");
    if (!terms.checked) {
      terms.classList.add("is-invalid");
      terms.nextElementSibling.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      terms.classList.remove("is-invalid");
      terms.nextElementSibling.nextElementSibling.style.display = "none";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Real-time validation for all fields
  document.getElementById("name").addEventListener("input", function () {
    validateInput(this, regexPatterns.name);
  });

  document.getElementById("email").addEventListener("input", function () {
    validateInput(this, regexPatterns.email);
  });

  document.getElementById("phone").addEventListener("input", function () {
    validateInput(this, regexPatterns.phone);
  });

  document.getElementById("message").addEventListener("input", function () {
    validateInput(this, regexPatterns.message);
  });

  document.getElementById("terms").addEventListener("change", function () {
    if (this.checked) {
      this.classList.remove("is-invalid");
    }
  });
});

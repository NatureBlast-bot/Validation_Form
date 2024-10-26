function validateForm() {
    let isValid = true;

    // Get form elements
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const success=document.getElementById('success');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Reset error messages
    nameError.textContent = emailError.textContent = phoneError.textContent = passwordError.textContent = confirmPasswordError.textContent = '';

    // Full Name Validation
    if (fullName.value.length < 5) {
      nameError.textContent = "Name must be at least 5 characters";
      isValid = false;
    }

    // Email Validation
    if (!email.value.includes('@')) {
      emailError.textContent = "Enter a valid email address";
      isValid = false;
    }

    // Phone Number Validation
    if (phone.value === "123456789" || phone.value.length !== 10 || isNaN(phone.value)) {
      phoneError.textContent = "Enter a valid 10-digit phone number";
      isValid = false;
    }

    // Password Validation
    if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value.toLowerCase() === fullName.value.toLowerCase()) {
      passwordError.textContent = "Password must be at least 8 characters and cannot be 'password' or your name";
      isValid = false;
    }

    // Confirm Password Validation
    if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match";
      isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
      success.textContent='Form Submitted Successfully!✌️';
    }
  }

  
// Variables
const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("error-message");
const givenEmail = document.getElementById("given-email");
const successModal = document.getElementById("success-modal");
const dismissBtn = document.getElementById("dismiss-btn");

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailValue || emailValue === "") {
    showError("Email is required");
  } else if (!emailPattern.test(emailValue)) {
    showError("Please enter a valid email");
  } else {
    clearError();
    successModal.showModal();
    showGivenEmail(emailValue);
    form.reset();
  }
});

// Clear error when user starts typing
form.addEventListener("input", () => {
  clearError();
});

// Close success modal
dismissBtn.addEventListener("click", () => {
  successModal.close();
});

// Helper functions
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add("error");
  emailInput.classList.add("error");
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.classList.remove("error");
  emailInput.classList.remove("error");
}

function showGivenEmail(email) {
  givenEmail.textContent = email;
}

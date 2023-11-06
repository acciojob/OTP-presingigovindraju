//your JS code here. If required.
// Select all OTP input elements
const otpInputs = document.querySelectorAll(".code");

// Add an event listener to each OTP input for automatically focusing on the next input
otpInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const currentInput = e.target;
    if (currentInput.value.length === 1) {
      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      } else {
        currentInput.blur();
      }
    } else if (currentInput.value.length === 0) {
      if (index > 0) {
        otpInputs[index - 1].focus();
      }
    }
  });

  // Add an event listener to focus the previous input on backspace key press
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

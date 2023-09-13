// Define these variables outside of the DOMContentLoaded event listener
const passcodeInput = document.getElementById('passcode-input');
const contentDiv = document.getElementById('content');
const passcodeContainer = document.getElementById('passcode-container');

document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the submit button
    document.getElementById('submit-passcode').addEventListener('click', function () {
        const enteredPasscode = passcodeInput.value;
        const correctPasscode = "subhodeepdey"; // Change to your desired passcode

        if (enteredPasscode === correctPasscode) {
            // If the entered passcode is correct, show the content
            contentDiv.style.display = "block";
            passcodeContainer.style.display = "none"; // Hide the passcode input
        } else {
            // If the entered passcode is incorrect, display an error message
            alert("Incorrect passcode. Please try again.");
            passcodeInput.value = ""; // Clear the input field
        }
    });
});

function togglePasswordVisibility() {
    const passcodeInput = document.getElementById("passcode-input");
    const showPasswordButton = document.getElementById("show-password");

    if (passcodeInput.type === "password") {
        passcodeInput.type = "text";
        showPasswordButton.textContent = "Hide Password";
    } else {
        passcodeInput.type = "password";
        showPasswordButton.textContent = "Show Password";
    }
}

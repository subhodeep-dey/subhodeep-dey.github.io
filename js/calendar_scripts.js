document.addEventListener("DOMContentLoaded", function () {
    const passcodeInput = document.getElementById("passcode-input");
    const submitButton = document.getElementById("submit-passcode");
    const contentDiv = document.getElementById("content");
    const passcodeContainer = document.getElementById("passcode-container");

    // Define the correct passcode (change this to your desired passcode)
    const correctPasscode = "subhodeepdey";

    // Add an event listener to the submit button
    submitButton.addEventListener("click", function () {
        const enteredPasscode = passcodeInput.value;

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

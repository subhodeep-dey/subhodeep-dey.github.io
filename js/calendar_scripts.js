// Get references to the input field and the form
const passcodeInput = document.getElementById('passcode-input');
const passcodeForm = document.getElementById('passcode-form');

// Add a submit event listener to the form
passcodeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Trigger the button click event
    document.getElementById('submit-passcode').click();
});

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

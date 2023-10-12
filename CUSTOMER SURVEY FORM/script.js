document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validation
        if (form.checkValidity()) {
            // Get form data
            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;

            const genderInputs = document.getElementsByName("gender");
            let selectedGender = "";
            for (const input of genderInputs) {
                if (input.checked) {
                    selectedGender += input.value + ", ";
                }
            }
            selectedGender = selectedGender.slice(0, -2); // Remove the trailing comma and space

            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;

            // Display data in a popup
            const popupContent = `
                <p><span class="popup-label">First Name:</span> ${firstName}</p>
                <p><span class="popup-label">Last Name:</span> ${lastName}</p>
                <p><span class="popup-label">Date of Birth:</span> ${dob}</p>
                <p><span class="popup-label">Country:</span> ${country}</p>
                <p><span class="popup-label">Gender:</span> ${selectedGender}</p>
                <p><span class="popup-label">Profession:</span> ${profession}</p>
                <p><span class="popup-label">Email:</span> ${email}</p>
                <p><span class="popup-label">Mobile Number:</span> ${mobile}</p>
            `;

            const popup = document.createElement("div");
            popup.className = "popup";
            popup.innerHTML = popupContent;

            // Append popup to the body
            document.body.appendChild(popup);

            // Close the popup and reset the form
            popup.addEventListener("click", function () {
                popup.style.display = "none";
                form.reset();
            });
        } else {
            alert("Please fill in all required fields.");
        }
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });
});


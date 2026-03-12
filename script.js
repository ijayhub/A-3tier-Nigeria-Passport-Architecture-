document.getElementById("passportForm").addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm()) {
                submitForm();
            }
        });

        function validateForm() {
            var isValid = true;

            // Clear previous error messages
            var errorElements = document.getElementsByClassName("error");
            for (var i = 0; i < errorElements.length; i++) {
                errorElements[i].innerText = "";
            }

            // Validate first name
            var firstName = document.getElementById("firstName").value.trim();
            if (firstName === "") {
                document.getElementById("firstNameError").innerText = "First Name is required";
                isValid = false;
            }

            // Validate last name
            var lastName = document.getElementById("lastName").value.trim();
            if (lastName === "") {
                document.getElementById("lastNameError").innerText = "Last Name is required";
                isValid = false;
            }

            // Validate date of birth
            var dob = document.getElementById("dob").value.trim();
            if (dob === "") {
                document.getElementById("dobError").innerText = "Date of Birth is required";
                isValid = false;
            }

            // Validate email
            var email = document.getElementById("email").value.trim();
            if (email === "") {
                document.getElementById("emailError").innerText = "Email is required";
                isValid = false;
            } else if (!isValidEmail(email)) {
                document.getElementById("emailError").innerText = "Invalid email format";
                isValid = false;
            }

    return isValid;
    }

    function isValidEmail(email) {
    // Simple email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    }

    function submitForm() {
    var formData = new FormData(document.getElementById("passportForm"));

    fetch('http://172.31.37.103/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert("Application submitted successfully");
            document.getElementById("passportForm").reset();
                    } else {
                        alert("Error: " + data.message);
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
            }document.getElementById("passportForm").addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm()) {
                submitForm();
            }
        });

        function validateForm() {
            var isValid = true;

            // Clear previous error messages
            var errorElements = document.getElementsByClassName("error");
            for (var i = 0; i < errorElements.length; i++) {
                errorElements[i].innerText = "";
            }

            // Validate first name
            var firstName = document.getElementById("firstName").value.trim();
            if (firstName === "") {
                document.getElementById("firstNameError").innerText = "First Name is required";
                isValid = false;
            }

            // Validate last name
            var lastName = document.getElementById("lastName").value.trim();
            if (lastName === "") {
                document.getElementById("lastNameError").innerText = "Last Name is required";
                isValid = false;
            }

            // Validate date of birth
            var dob = document.getElementById("dob").value.trim();
            if (dob === "") {
                document.getElementById("dobError").innerText = "Date of Birth is required";
                isValid = false;
            }

            // Validate email
            var email = document.getElementById("email").value.trim();
            if (email === "") {
                document.getElementById("emailError").innerText = "Email is required";
                isValid = false;
            } else if (!isValidEmail(email)) {
                document.getElementById("emailError").innerText = "Invalid email format";
                isValid = false;
            }

    return isValid;
    }

    function isValidEmail(email) {
    // Simple email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    }

    function submitForm() {
    var formData = new FormData(document.getElementById("passportForm"));

    fetch('http://public_ip_logic_tier_instance:5000/submit'', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert("Application submitted successfully");
            document.getElementById("passportForm").reset();
                    } else {
                        alert("Error: " + data.message);
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
            }

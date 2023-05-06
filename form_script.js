const form = document.getElementById("validationForm");
		const fullName = document.getElementById("fullName");
		const email = document.getElementById("email");
		const phone = document.getElementById("phone");
		const password = document.getElementById("password");
		const confirmPassword = document.getElementById("confirmPassword");
		const submitBtn = document.getElementById("submitBtn");

		form.addEventListener("submit", function(event) {
			event.preventDefault();
			validateForm();
		});

		function validateForm() {
			const fullNameValue = fullName.value.trim();
			const emailValue = email.value.trim();
			const phoneValue = phone.value.trim();
			const passwordValue = password.value.trim();
			const confirmPasswordValue = confirmPassword.value.trim();

			let isFormValid = true;

			if (fullNameValue.length < 5) {
				document.getElementById("fullNameError").innerHTML = "Full Name must be at least 5 characters.";
				isFormValid = false;
			} else {
				document.getElementById("fullNameError").innerHTML = "";
			}

			if (emailValue.indexOf("@") === -1) {
				document.getElementById("emailError").innerHTML = "Email must contain @ character.";
				isFormValid = false;
			} else {
				document
            }
        }
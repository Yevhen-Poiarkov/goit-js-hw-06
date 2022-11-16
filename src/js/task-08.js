const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", checkFields);

function checkFields(event) {

	event.preventDefault();

	const formEl = event.currentTarget.elements;
	const email = formEl.email.value;
	const password = formEl.password.value;

	if (email.length === 0 || password.length === 0) {
		alert("Заповніть всі поля");
		return;
	}

	const formData = {
		email,
		password,
	};
	console.log(formData);

	formRef.reset();
}

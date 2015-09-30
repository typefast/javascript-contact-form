var sumbit = document.getElementById('submit');
var form = document.getElementById('form');
var nameInput = document.querySelector('input');
var emailInput = document.querySelector('input[name="email"]');

//create error message divs
function error() {
	var div = document.createElement('div');
	div.className = "error";
	div.innerHTML = "Make sure you enter a Name and Email";
	form.appendChild(div);
	setTimeout(hideError, 2250);
}

//hide error message divs
function hideError() {
	var errorDiv = document.querySelectorAll('.error');
		for (var i = 0; i < errorDiv.length; i++) {
		errorDiv[i].style.display = "none";
	}
}

// focus message bubble for name
function focusMessage() {
	var div = document.createElement('div');
	div.className = "focusMessage";
	div.innerHTML = "Enter your full name";
	form.appendChild(div);
}
//focus message bubble for email
function focusMessageEmail() {
	var div = document.createElement('div');
	div.className = "focusMessage";
	div.innerHTML = "Enter a valid email address";
	form.appendChild(div);
}

//hide focus message 
function blurRemove() {
	var focusDiv = document.querySelectorAll('.focusMessage');
		for (var i = 0; i < focusDiv.length; i++) {
		focusDiv[i].style.display = "none";
	}
} 


//checking if input fields are empty
function validation() {
	if (form.name.value == "") {
		error();
		return false;

	} else if (form.email.value == "") {
		error();
		return false;
	} 

	return true;
}

form.onsubmit = function() {
	return validation();
}

nameInput.addEventListener('focus', focusMessage);
nameInput.addEventListener('blur', blurRemove);

emailInput.addEventListener('focus', focusMessageEmail);
emailInput.addEventListener('blur', blurRemove);
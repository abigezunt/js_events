// add an event listener that prompts for user information when button is clicked
// addEventListener
// onclick
// removeEventListener

var Page = {

	myButton: document.getElementById('add-person-button'),
	myLink: document.getElementById('add-person-link'),


	setButtonEvent: function() {
		// write a function that adds an event listener to the button
		// that will call the promptInfo function.
		// after the button is clicked, it should say "change person info"
	},

	setLinkEvent: function() {
		// write a function that will add an event listener to the link,
		// making sure that you account for the link's natural redirct.
	},


	promptInfo: function() {
		var name = prompt("what is your name?"),
			age = prompt('how old are you?'),
			email = prompt('what is your email');
			addPerson(name, age, email);
	},

	addPerson: function(name, age, email) {
		var userDiv = document.getElementById('user-box'),
			nameHeader = "<h1>" + name + "</h1>",
			ageField = "<h2>" + age + "</h2>",
			emailField = "<h2>" + email + "</h2>";

		userDiv.innerHTML = nameHeader + ageField	+ emailField;
	}
};


Page.setButtonEvent();
Page.setLinkEvent();
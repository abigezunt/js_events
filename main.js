// add an event listener that prompts for user information when button is clicked
// addEventListener
// onclick
// removeEventListener
'use strict';

var Page = {

	myButton: document.getElementById('add-person-button'),
	myLink: document.getElementById('add-person-link'),

	setButtonEvent: function() {
		// write a function that adds an event listener to the button
		// that will call the promptInfo function.
		// after the button is clicked, it should say "change person info"
		Page.myButton.addEventListener('click', Page.clickResponse);
	},

	setLinkEvent: function() {
		// We are defining a callback, which is a function defined in-line.
    Page.myLink.addEventListener('click', function(event) {
      event.preventDefault();
      Page.clickResponse();
    });
		// write a function that will add an event listener to the link,
		// making sure that you account for the link's natural redirct.
	},
  
  changeButtonText: function() {
		Page.myButton.innerHTML = 'change person info';
	},

	changeLinkText: function() {
		Page.myLink.innerHTML = 'change person info';
	},

  clickResponse: function() {
    Page.promptInfo();
    Page.changeButtonText();
    Page.changeLinkText();
  },

	promptInfo: function() {
		var name = prompt('what is your name?'),
			age = prompt('how old are you?'),
			email = prompt('what is your email');
			Page.addPerson(name, age, email);
	},

	addPerson: function(name, age, email) {
		var userDiv = document.getElementById('user-box'),
			nameHeader = '<h1>' + name + '</h1>',
			ageField = '<h2>' + age + '</h2>',
			emailField = '<h2>' + email + '</h2>';

		userDiv.innerHTML = nameHeader + ageField	+ emailField;
	},

};

Page.setButtonEvent();
Page.setLinkEvent();
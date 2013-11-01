'use strict';

var Page = {

	myDiv: document.getElementById('colormagick'),
	greenButton: document.getElementById('green_button'),
	redButton: document.getElementById('red_button'),
	blueButton: document.getElementById('blue_button'),

	setButtonEvent: function() {
		Page.greenButton.addEventListener('click', Page.greenClickResponse);
		Page.redButton.addEventListener('click', Page.redClickResponse);
		Page.blueButton.addEventListener('click', Page.blueClickResponse);
	},

	greenClickResponse: function() {
		Page.myDiv.className = 'green';
	},
	redClickResponse: function() {
		Page.myDiv.className = 'red';
	},
	blueClickResponse: function() {
		Page.myDiv.className = 'blue';
	}
};

Page.setButtonEvent();
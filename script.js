// JavaScript Document

// Смена темы

let _background = document.querySelector('html');
let _toDoBackground = document.querySelector('.container');
let _themeSwitch = document.querySelector('.themeSwitch');

function themeSwitch() {
	let _color = _themeSwitch.options[_themeSwitch.selectedIndex].value;
	
	switch (_color) {
		case "1": 
		_background.style.backgroundColor = '#000';
		_toDoBackground.style.backgroundColor = '#B678FF';
		break;
		case "2": 
		_background.style.backgroundColor = '#FFF';
		_toDoBackground.style.backgroundColor = '#8fd8ff';	
		break;
	}
}

_themeSwitch.addEventListener('change', themeSwitch);

/*--------------*/


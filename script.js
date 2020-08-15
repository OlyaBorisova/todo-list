
let themeSwitch = document.querySelector('.theme-switch');
themeSwitch.addEventListener('change', themeSwitchFun);

function themeSwitchFun() {
	let color = themeSwitch.options[themeSwitch.selectedIndex].value;
	let background = document.querySelector('body');
	let toDoBackground = document.querySelector('.container');

	switch (color) {
		case "1":
			background.style.backgroundColor = '#000';
			toDoBackground.style.backgroundColor = '#B678FF';
			break;
		case "2":
			background.style.backgroundColor = '#FFF';
			toDoBackground.style.backgroundColor = '#8fd8ff';
			break;
	}
};

/*--------------*/

let addTaskButton = document.querySelector('.add-task__button');
let addTaskInput = document.querySelector('.new-task');
let count = 0;

addTaskButton.addEventListener('click', addTaskBtnActive);
addTaskInput.addEventListener('submit', addTaskBtnActive);

function addTaskBtnActive(event) {
	
	document.querySelector('.add-task__image').classList.toggle('add-task__image_visible');
	document.querySelector('.add-task__image2').classList.toggle('add-task__image_visible');
	document.querySelector('.new-task').classList.toggle('new-task_visible');

	if (addTaskButton.classList.contains('add-task__button_active')) {
		addTask ();
		document.querySelector('.new-task__input').value = '';
	} else {
		setTimeout(() => {
			document.querySelector('.new-task__input').focus(); 
		}, 1000);
	}	

	addTaskButton.classList.toggle('add-task__button_active');
	event.preventDefault();
}

/*--------------*/

addTaskButton.addEventListener('mousedown', changeAddTaskBtnSmall);
addTaskButton.addEventListener('mouseup', changeAddTaskBtnBig);

function changeAddTaskBtnSmall() {
	addTaskButton.classList.add('add-task__button_shape');
};

function changeAddTaskBtnBig() {
	addTaskButton.classList.remove('add-task__button_shape');
};

/*--------------*/

function addTask() {
	let task = document.querySelector('.new-task__input').value;

	let carrentDate = new Date();

	let carrentYear = carrentDate.getFullYear();

	let carrentMonth = carrentDate.getMonth() + 1;
	let realMonth = carrentMonth < 10 ? '0' + carrentMonth : carrentMonth;	

	let carrentDay = carrentDate.getDate();
	let realDay = carrentDay < 10 ? '0' + carrentDay : carrentDay;

	let carrentHour = carrentDate.getHours();
	let realHour = carrentHour < 10 ? '0' + carrentHour : carrentHour;

	let carrentMinute = carrentDate.getMinutes();
	let realMinute = carrentMinute < 10 ? '0' + carrentMinute : carrentMinute;

	let dateForToDo = realDay + '.' + realMonth + '.' + carrentYear;
	let timeForToDo = realHour + ':' + realMinute;
		
	let taskDescription = `<div class="task">
		<input type="checkbox" id="task-list__checkbox${count}" class="task-list__checkbox">
		<label for="task-list__checkbox${count++}"></label>
		<div class="task-list__description">
			<h2 class="task-list__heading">${task}</h2>
			<div class="task-list__date">
			<div class="task-list__image task-list__image1"></div>
			<span>${dateForToDo}</span>
			<div class="task-list__image task-list__image2"></div>
			<span>${timeForToDo}</span>
		</div>
		</div>	
	</div>`;
	document.querySelector('.task-list').innerHTML += taskDescription;	
} 


/*
function Fizzbuzz(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push('fizzbuzz');
		} else if (i % 3 === 0 && i % 5 != 0) {
			arr.push('fizz');
		} else if (i % 3 != 0 && i % 5 === 0) {
			arr.push('buzz');
		} else {
			arr.push(i);
		}
	}
	console.log(arr);
	return arr;
}
*/
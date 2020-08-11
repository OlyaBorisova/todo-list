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


addTaskButton.addEventListener('click', addTaskBtnActive);
addTaskInput.addEventListener('submit', addTaskBtnActive);

function addTaskBtnActive(event) {

	document.querySelector('.add-task__image').classList.toggle('add-task__image_visible');
	document.querySelector('.add-task__image2').classList.toggle('add-task__image_visible');
	document.querySelector('.new-task').classList.toggle('new-task_visible');

	if (addTaskButton.classList.contains('add-task__button_active')) {
		
		function addTask() {
			let task = document.querySelector('.new-task__input').value;
			let taskDescription = `<div class="task">
				<input type="checkbox" id="task-list__checkbox" class="task-list__checkbox">
				<label for="task-list__checkbox"></label>
				<div class="task-list__description">
					<h2 class="task-list__heading">${task}</h2>
					<p class="task-list__date">Сегодня 10:00 pm</p>
				</div>	
			</div>`;
			document.querySelector('.task-list').innerHTML += taskDescription;	
		} 
	addTask ();
	document.querySelector('.new-task__input').value = '';
	} 	

	addTaskButton.classList.toggle('add-task__button_active');
	event.preventDefault();
	//document.querySelector('.new-task__input').focus() // тут проблема
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





let button = document.querySelector('.animation_on__ball');
let line = document.querySelector('.animation_on__line');

let linki = document.querySelectorAll('.section_1__links');

let class_name = 'section_1_on_';

let temp_class_name = ' ';

button.onclick = function() {
	button.classList.toggle('animation_on__ball--active');
	line.classList.toggle('animation_on__line--active');

	for (let i=0; i<linki.length; i++) {

		let a = i + 1;

		temp_class_name = class_name + a;

		linki[i].classList.toggle(temp_class_name);

		a = '';
	}
}


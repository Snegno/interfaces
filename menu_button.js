let button = document.querySelector('.piano_animation_on__ball');
let line = document.querySelector('.piano_animation_on__line');

let linki = document.querySelectorAll('.piano__links');

let class_name = 'piano__link_on_';

let temp_class_name = ' ';

button.onclick = function() {
	button.classList.toggle('piano_animation_on__ball--active');
	line.classList.toggle('piano_animation_on__line--active');

	for (let i=0; i<linki.length; i++) {

		let a = i + 1;

		temp_class_name = class_name + a;

		linki[i].classList.toggle(temp_class_name);

		a = '';
	}
}


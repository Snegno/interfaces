let burger_menu_open = document.querySelector('.section_1_field_2__burger');

let main_menu = document.querySelector('.section_1_field_2__main_menu');

//открыть бургер меню

burger_menu_open.onclick = function() {

	main_menu.classList.toggle('section_1_field_2__main_menu--on');

}

// Кнопка "В обычное меню"

let default_menu = document.querySelector('.no_burger__button');

let menu_list = document.querySelector('.section_1_field_2__list');

let field_2 = document.querySelector('.section_1_field_2');

let form_buttons = document.querySelector('.section_1_field_2__burger_transform');


default_menu.onclick = function() {

	//прячем сам бургер
	burger_menu_open.classList.add('section_1_field_2__burger--off');

	//показываем меню
	main_menu.classList.remove('section_1_field_2__main_menu--off');

	//
	menu_list.classList.remove('section_1_field_2__list--burger');

	//располагаем элементы в секции в столбик
	field_2.classList.add('section_1_field_2--column');

	//двигаем форму с кнопками в положение Дэфолта
	form_buttons.classList.add('burger_transform--default_position');

}

// Кнопка "В Бургер"

let burger_menu = document.querySelector('.burger__button');

burger_menu.onclick = function() {

	//прячем сам бургер
	burger_menu_open.classList.remove('section_1_field_2__burger--off');

	//показываем меню
	main_menu.classList.add('section_1_field_2__main_menu--off');

	//
	menu_list.classList.add('section_1_field_2__list--burger');

	//располагаем элементы в секции в столбик
	field_2.classList.remove('section_1_field_2--column');

	//двигаем форму с кнопками в положение Дэфолта
	form_buttons.classList.remove('burger_transform--default_position');


}
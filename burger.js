let burger_menu_open = document.querySelector('.burg_house__burger');

let main_menu = document.querySelector('.burg_house__main_menu');

//открыть бургер меню

burger_menu_open.onclick = function() {

	main_menu.classList.toggle('burg_house__main_menu--on');

}

// Кнопка "В обычное меню"

let default_menu = document.querySelector('.no_burger__button');

let menu_list = document.querySelector('.burg_house__list');

let field_2 = document.querySelector('.r_1_burg_house');

let form_buttons = document.querySelector('.burg_house_transform');


default_menu.onclick = function() {

	//прячем сам бургер
	burger_menu_open.classList.add('burg_house__burger--off');

	//показываем меню
	main_menu.classList.remove('burg_house__main_menu--off');

	//
	menu_list.classList.remove('burg_house__list--burger');

	//располагаем элементы в секции в столбик
	field_2.classList.add('burg_house--column');

	//двигаем форму с кнопками в положение Дэфолта
	form_buttons.classList.add('burg_house_transform--default_position');

}

// Кнопка "В Бургер"

let burger_menu = document.querySelector('.burger__button');

burger_menu.onclick = function() {

	//показываем сам бургер
	burger_menu_open.classList.remove('burg_house__burger--off');

	//прячем меню
	main_menu.classList.add('burg_house__main_menu--off');

	//
	menu_list.classList.add('burg_house__list--burger');

	//располагаем элементы в секции в столбик
	field_2.classList.remove('burg_house--column');

	//двигаем форму с кнопками в положение Дэфолта
	form_buttons.classList.remove('burg_house_transform--default_position');


}

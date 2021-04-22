$(document).ready(function(){

let count = 1;

let task_name;

// Из поля input ('.to-do__enter_task') забираем val и отправляем в Список
// после клика на кнопку 
$('.to-do__add_task').click(function() {

	task_name = $('.to-do__enter_task').val();

	let class_named="active_list__task-"+count;

	/*console.log('class_named = '+class_named);

	console.log('task_name = '+task_name);*/

	// добавляем в список <li>
	$('.to-do__active_list').append('<li class=' + class_named + '></li>');

	$('.' + class_named).append('<input class="active_list__task active_list__task-' + count + '_checkbox" type="checkbox"> ' + task_name +'</input>')
	
	/*console.log('click, count' + count)*/

	count++;
	
	// Зачистка поля inputa ('.to-do__enter_task')
	$('.to-do__enter_task').val('');
})


// Ставим Галочку в Чекбокс и он со своей родительской <li>
// переносится из ('.to-do__active_list') в ('.to-do__finish_list')
$('.to-do__active_list').change('.active_list__task', function(xxx){

	/*console.log(xxx);*/

	if ( $(xxx.target).is(':checked') == true) {

		/*console.log('Ура, нажат ' + xxx.target.classList[1])*/

		let temp = '.' + xxx.target.classList[1];

		let new_temp = $(temp).parent();

		/*console.log('outer = '+(new_temp).prop('outerHTML'));*/

		// Копируем из (.to-do__active_list) Li и Input в Финиш-лист
		$('.to-do__finish_list').append((new_temp).prop('outerHTML')); 
		// удаляем из (.to-do__active_list) Li и Input в Финиш-лист
		$(new_temp).remove();
		}

})

// Ставим галочку в Чекбокс и он вместе со своей родительской <li>
// удаляется
$('.to-do__finish_list').change('.active_list__task', function(sss){

	/*console.log(sss);*/

	if ($(sss.target).is(':checked') == true) {

		/*console.log('target ' + sss.target.classList[1]);*/

		// Присвоили переменной temp название класса Чекбокса
		let temp = '.' + sss.target.classList[1];

		//нашли родителя Чекбокса
		let new_temp = $(temp).parent();
		// Удалили Родителя Чекбокса вместе с самим Чекбоксом
		$(new_temp).remove();
	}

})


});
		



$(document).ready(function() {

let count_slide = 1;

$('.r_2_slider__arrow_right').click(function(){

	if(count_slide >= 4){
		
		count_slide = 0;

	}

	count_slide++;

	$('.r_2_slider__img').attr('src','img/slide_'+count_slide+'.jpg');

})

$('.r_2_slider__arrow_left').click(function(){
	
	count_slide--;

	if(count_slide <= 0){

		count_slide = 4;

	}

	$('.r_2_slider__img').attr('src','img/slide_'+count_slide+'.jpg');

})


})
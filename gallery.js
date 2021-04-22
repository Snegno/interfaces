let cards_min = document.querySelectorAll('.r_2_gallery__cards');
let cards_max = document.querySelector('.r_2_gallery__popup');
let img = document.querySelector('.r_2_gallery__popup_img');
let close = document.querySelector('.r_2_gallery__popup_close');

for (let i=0; i<cards_min.length; i++) {

	cards_min[i].onclick = function() {
		if(i>0) {
			img.setAttribute('src', 'img/fallout/'+(i+1)+'.png');
			console.log(img.getAttribute('src'));
		}
		else {
			img.setAttribute('src', 'img/fallout/1.png');
		}
		console.log('cards '+(i+1)+'click!');
		cards_max.classList.toggle('r_2_gallery__popup--off');
		cards_max.classList.toggle('r_2_gallery__popup--on');
	}

}	

close.onclick = function(){
	cards_max.classList.toggle('r_2_gallery__popup--off');
	cards_max.classList.toggle('r_2_gallery__popup--on');
}

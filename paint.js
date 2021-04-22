
let canvas = document.querySelector('.r_3_paint__canvas');
let ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.fillStyle = 'black';
ctx.beginPath();

let status = 'off';
let color = 'black';
let clearing_brush = 'off';

let width_line = 1;

let color_arr = ['black', 'green', 'yellow', 'red', 'pink', 'blue', 'brown', 'gray'];

let count = 0;

canvas.onmousedown = function(move){

	status = 'on';

	ctx.beginPath();
	ctx.lineWidth = width_line;
	ctx.moveTo(move.offsetX, move.offsetY);
}

canvas.onmouseup = function(){
	status = 'off';
}

canvas.onmouseout = function(){
	status = 'off';
}

canvas.onmousemove = function(move){
	if(status == 'on'){
		if(clearing_brush == 'on'){
			ctx.clearRect(move.offsetX-5, move.offsetY-5, 20, 20);
		}
		else {
			ctx.strokeStyle = color;
			ctx.lineTo(move.offsetX, move.offsetY);
			ctx.stroke();
		}
	}
}

// Панель управления

let clear = document.querySelector('.r_3_paint__control_clear');
let brush_big = document.querySelector('.r_3_paint__control_brush_big');
let brush_small = document.querySelector('.r_3_paint__control_brush_small');

clear.onclick = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
}

brush_big.onclick = function(){
	width_line += 6; 
}
brush_small.onclick = function(){
	width_line -= 8; 
}
 // Query тоже используем чтобы не терять навык ^^
$(document).ready(function(){

	$('.r_3_paint__control_lastik').click(function(){
		clearing_brush = 'on';
	});

	$('.r_3_paint__control_brush').click(function(){
		clearing_brush = 'off';
		width_line = 1;
	})

	$('.r_3_paint__control_next_color').click(function(){
		color = color_arr[count+1];
		
		if(count == color_arr.length-2){
			count = -2;
		}
		count ++;

		if(color == color_arr[0]){
			$('.r_3_paint__control_next_color').css({'background-color': '#efefef'});
		} 
		else {
			$('.r_3_paint__control_next_color').css({'background-color': color });
		}
	})

});

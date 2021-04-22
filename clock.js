$(document).ready(function(){

let time_12 = -90;

let time = 0;

let time_min = -90;


function clock(){

Data = new Date();

let hours = Data.getHours();

let min = Data.getMinutes();

let sec =Data.getSeconds();

let sec_counter =time_12+sec*6;

let time_count = time_min + min*6;

let time_hh = time_12 + hours*30+min/2+1; 

let arr_hours=[];

let t=0;
for(let i=0; i<360; i++) {
	arr_hours[t] = time_12 + i;
	i+=29;
	t++;
}

$('.clock__clock_hours').css({'transform': 'rotate(' + time_hh + 'deg)'});


$('.clock__clock_min').css({'transform': 'rotate(' + time_count + 'deg)'});

$('.clock__clock_sec').css({'transform': 'rotate(' + sec_counter + 'deg)'})

if(min < 10) {
	min = '0' + min;
}

$('.new_clock__hours').text(hours);
$('.new_clock__min').text(min);

};

setInterval(clock, 1000);


clock();

function beep() {
	$('.new_clock__red_1').hide(0.009);
	$('.new_clock__red_2').hide(0.009);
	$('.new_clock__red_1').show(0.009);
	$('.new_clock__red_2').show(0.009);
}

beep();
setInterval(beep, 2000);

});
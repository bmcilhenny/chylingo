var $square = $('.square');
var $china = $('#iBox');
var $checkAnswer = $('#checkAnswerWrapper');
var answeredCorrectly = false;
var zhongGuoAudio = document.createElement("audio");
        zhongGuoAudio.src="../audio/wo.mp3";
        zhongGuoAudio.volume=0.30;
        zhongGuoAudio.autoPlay=false;
        zhongGuoAudio.preLoad=true;
var woosh = document.createElement("audio");
	woosh.src = "../audio/congratulations.mp3";



$('.square').on('click',function(){
   $('.square').removeClass('selectedSquare');
    $(this).addClass('selectedSquare');
});

function resetButtonIfIncorrect() {
	answeredCorrectly = false;
	$('#checkAnswer').toggleClass('incorrectAnswer');
	$('#checkAnswer').removeClass('correctAnswer');
	$('#placeHolder').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#reviewText').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#checkAnswer').html('Incorrect')
	
	setTimeout(function() {
		$('#checkAnswer').toggleClass('incorrectAnswer');
		$('#checkAnswer').css('background', '#FFFFFF !important');
		$('#checkAnswer').html('Submit');
	}, 2000);

}

$('#checkAnswer').on('click', function() {
	//if nothing has the class selectedSquare { } else 
		if ($china.hasClass('selectedSquare') === true) {
			answeredCorrectly = true;
			zhongGuoAudio.play();
			$(this).removeClass('incorrectAnswer');
			$(this).addClass('correctAnswer');
			$(this).html('Correct!');
			$('#reviewText').html('我 (Wǒ) means "I". 我喜欢你 (Wǒ xǐhuān nǐ) means "I like you."')
			$('#placeHolder').html('<div id = "nextButton">Next</div>');
			$('#placeHolder').addClass('buttonWrapper');
			$('#placeHolder').addClass('animated slideInUp');
			$('#reviewText').addClass('animated slideInUp');


		} else {
			resetButtonIfIncorrect();
		}
});

$('#placeHolder').mouseup(function() {
	console.log(answeredCorrectly);
	if (answeredCorrectly === true) {
		 $('.poop').animate({left: '-150%'}, 500);
		 woosh.play();

		 //append poop to another div then delete div?
		 //slide in next lesson
	}
});
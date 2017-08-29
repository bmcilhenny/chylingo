var $square = $('.square');
var $china = $('#chinaBox');
var $checkAnswer = $('#checkAnswerWrapper');
var answeredCorrectly = false;
var zhongGuoAudio = document.createElement("audio");
        zhongGuoAudio.src="../audio/china.mp3";
        zhongGuoAudio.volume=0.30;
        zhongGuoAudio.autoPlay=false;
        zhongGuoAudio.preLoad=true;
var woosh = document.createElement("audio");
	woosh.src = "../audio/fantastic.mp3";



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
			$('#reviewText').html('中(zhōng) 国(guó), which literally means "middle kingdom", is how you say China in Mandarin.')
			$('#placeHolder').html('<div id = "nextButton">Next</div>');
			$('#placeHolder').addClass('buttonWrapperHello');
			$('#placeHolder').addClass('animated slideInUp');
			$('#reviewText').addClass('animated slideInUp');


		} else {
			resetButtonIfIncorrect();
		}
});

$('#placeHolder').mouseup(function() {
	console.log(answeredCorrectly);
	if (answeredCorrectly === true) {
		 $('#lessonOne').animate({left: '-150%'}, 500);
		 woosh.play();
	};
});
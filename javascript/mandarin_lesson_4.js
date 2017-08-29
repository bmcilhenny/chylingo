var $square = $('.square');
var $china = $('#correctHen');
var $checkAnswer = $('#checkAnswerWrapper');
var answeredCorrectly = false;
var hen = document.createElement("audio");
        hen.src="../audio/hen.mp3";
        hen.volume=0.30;
        hen.autoPlay=false;
        hen.preLoad=true;
var tremendousPotential = document.createElement("audio");
	tremendousPotential.src = "../audio/tremendousPotential.mp3";



$('.square').on('click',function(){
   $('.square').removeClass('selectedSquare');
    $(this).addClass('selectedSquare');
});


$('#replayAudioButton').on('click', function() {
	hen.play()
})

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
			hen.play();
			$(this).removeClass('incorrectAnswer');
			$(this).addClass('correctAnswer');
			$(this).html('Correct!');
			$('#reviewText').html('很(Hěn) can be used like this: 她很喜欢我 (She really/very much likes me).')
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
		 tremendousPotential.play();
	}
});
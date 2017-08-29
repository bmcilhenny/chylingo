var $square = $('.square');
var $correctXihuan = $('#correctXihuan');
var $checkAnswer = $('#checkAnswerWrapper');
var answeredCorrectly = false;
var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', '../audio/xihuan.mp3');
var chinaChinaChina = document.createElement('audio');
	chinaChinaChina.setAttribute('src', '../audio/chinaChinaChina.mp3');

$('#replayAudioButton').on('click', function() {
	audioElement.play();
	console.log('clicked')
});

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
		if ($correctXihuan.hasClass('selectedSquare') === true) {
			answeredCorrectly = true;
			$(this).removeClass('incorrectAnswer');
			$(this).addClass('correctAnswer');
			$(this).html('Correct!');
			$('#reviewText').html("Combine 喜(happy) and 欢 (delighted) to say 'like'. '喜欢中国'' means 'to like China.'")
			$('#placeHolder').html('<div id = "nextButton">Next</div>');
			$('#placeHolder').addClass('buttonWrapper');
			$('#placeHolder').addClass('animated slideInUp');
			$('#reviewText').addClass('animated slideInUp');
			audioElement.play();


		} else {
			resetButtonIfIncorrect();
		}
});

$('#placeHolder').mouseup(function() {
	console.log(answeredCorrectly);
	if (answeredCorrectly === true) {
		 $('#secondQuestion').animate({left: '-150%'}, 500);
		 chinaChinaChina.play();
		 //append poop to another div then delete div?
		 //slide in next lesson
	}
});
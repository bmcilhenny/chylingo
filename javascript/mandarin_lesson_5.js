var $square = $('.square');
var $checkAnswer = $('#checkAnswerWrapper');
var answeredCorrectly = false;
var iVeryVeryVeryMuchLikeChina = document.createElement("audio");
        iVeryVeryVeryMuchLikeChina.src = "../audio/iVeryVeryVeryMuchLikeChina.mp3";
        iVeryVeryVeryMuchLikeChina.volume=0.30;
        iVeryVeryVeryMuchLikeChina.autoPlay=false;
        iVeryVeryVeryMuchLikeChina.preLoad=true;
var woosh = document.createElement("audio");
	woosh.src = "../audio/congratulations.mp3";56

function correctChoices() {
	var selectChoices = document.querySelectorAll('#translateBoxCover .choices');
	var checkChoicesArray = [];
	for (var i = 0; i < selectChoices.length; i++) {
		checkChoicesArray.push(selectChoices[i].textContent);
	}
	if (checkChoicesArray.join('') == '我很很很喜欢中国') {
		return true;
	}
}

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

function checkAnswer() {
	if ( correctChoices() === true) {
			answeredCorrectly = true;
			iVeryVeryVeryMuchLikeChina.play();
			$('#checkAnswer').removeClass('incorrectAnswer');
			$('#checkAnswer').addClass('correctAnswer');
			$('#checkAnswer').html('Correct!');
			$('#reviewText').html('我很喜欢你 (Wǒ hěn xǐhuān nǐ) means "I really/very much like you."')
			$('#placeHolder').html('<div id = "nextButton">Finish</div>');
			$('#placeHolder').addClass('buttonWrapper');
			$('#placeHolder').addClass('animated slideInUp');
			$('#reviewText').addClass('animated slideInUp');
		} else {
			resetButtonIfIncorrect();
		}
	}

$('.choices').on('click', function() {
  var $this = $(this);
  if ($this.parent().attr('id') == 'translateBoxCover') {
    var index = $this.data('index');
    if (index == 0) {
      $this.prependTo($("#choicesWrapper"));
    } else {
      $this.insertAfter($("#choicesWrapper .choices").eq(index-1));
    }
  } else {
    $this.data('index', $this.index());
    $this.appendTo("#translateBoxCover");
  }
});


$('#checkAnswer').on('click', function() {
	checkAnswer(); 
		
});

$('#placeHolder').mouseup(function() {
	if (answeredCorrectly === true) {
		woosh.play();
		alert("Congratulations! You have finished your first lesson of Chylingo!\n \nThe idea for Chylingo came to creator Brendan after he spent an evening in front of the tube catching up on some news while simultaneously mulling over this deeply philosophical question:\n\nWhy in God's name does popular language-learning app Duolingo not offer lessons on the most spoken language in the world? Then all of the sudden. BOOM! Chylingo was born! All graphics you see in Chylingo (besides the customized text, thanks @dafonts.com) including the opening Trump animation are all designed by Brendan in Sketch. 'Take your work seriously, not yourself' is a motto Brendan lives by, hence Chylingo! He hopes the Mandarin lesson provided through Chylingo can serve as a gateway for avid language learners and total language noobs alike to pickup learning Mandarin. And hey, if you chuckled to yourself along the way, that's fine too. As an avid Mandarin-learner of almost 9 years, Brendan guarantees that the Mandarin lesson provided through Chylingo is gramatically accurate. Cheerios!");
		 //$('.poop').animate({left: '-150%'}, 500);
		 //append poop to another div then delete div?
		 //slide in next lesson
	}
});
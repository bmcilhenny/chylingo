var trumpy = document.querySelector("#trump");
var requestAnimationFrame = window.requestAnimationFrame;

$(document).ready(function() {
	$('h1').addClass('animated slideInRight');
	//this hides the bottom static update bar
});

var $startLessonButton = $('.startLessonButtonUp');
$startLessonButton.mousedown(function() {
	$(this).attr('src', '../images/start_lesson_button_down.png');
});

$startLessonButton.mouseup(function() {
	$(this).attr('src', '../images/start_lesson_button_up.png');
	$(this).addClass('animated slideInLeft');
});


var today = new Date();
var TrumpsStateVisit = new Date('March 12, 2018 12:00:00');
var daysTillTrumpsStateVisit = TrumpsStateVisit.getTime() - today.getTime();
daysTillTrumpsStateVisit = (daysTillTrumpsStateVisit / 86400000); //number of milleseconds in a day

var $countDownTillTrumpsChinaTrip = ('#countDownTillTrumpsChinaTrip');
document.getElementById("countDownTillTrumpsChinaTrip").innerHTML = '<b>' + Math.floor(daysTillTrumpsStateVisit) + '</b>';


var textBox = document.getElementById('explainerBoxWrapper');

function textBoxFadesInThenOut() {
	var textBoxOpacity = textBox.style.opacity;
	setTimeout(function() {
		textBoxOpacity = 1;
	}, 1000);
	if (textBox.style.opacity = 1) {
		setTimeout(function() {
			textBox.style.removeProperty('opacity');
		}, 9000);
		//call trumpwalksout function
	}
}

//for this function I passed an array instead of hardcoding the .srcs like I did in moveTrumpIn just to show both work
var trumpLooksUpArray = ['../images/trump_looking_up_animation_1.png', '../images/trump_looking_up_animation_2.png', '../images/trump_looking_up_animation_3.png', '../images/trump_looking_up_animation_4.png', '../images/trump_looking_up_animation_5.png', '../images/trump_looking_up_animation_6.png', '../images/trump_looking_up_animation_7.png'];
var trumpLooksUpCounter = 0;
var secondaryCounter = 0;

function trumpLooksUp(trumpLooksUpArray) {
	trumpy.src = trumpLooksUpArray[trumpLooksUpCounter];
	//console.log(trumpy.height)
	//console.log(trumpy.width)
	//console.log(trumpLooksUpArray[trumpLooksUpCounter]);
	setTimeout(function () {             
                        
      if (trumpLooksUpCounter + 1 == trumpLooksUpArray.length) {
      	secondaryCounter ++;
      	trumpLooksUpCounter = 0;
      	//console.log(secondaryCounter)
      	if (secondaryCounter == 2) {
      		moveTrumpsThumbsUp(trumpGivesThumbsUpArray);
      	} else {
      		trumpLooksUp(trumpLooksUpArray);
      	}
      } else {
      	trumpLooksUpCounter++;   
      	trumpLooksUp(trumpLooksUpArray); //iterate through the loop
      	}                    
   }, 500);
}

var trumpGivesThumbsUpArray = ['../images/trump_thumbsup_1.png', '../images/trump_thumbsup_2.png', '../images/trump_thumbsup_3.png', '../images/trump_thumbsup_4.png', '../images/trump_thumbsup_5.png'];
var trumpGivesThumbsUpCounter = 0;
var secondaryThumbsUpCounter = 0;

function moveTrumpsThumbsUp(trumpGivesThumbsUpArray) {
	trumpy.src = trumpGivesThumbsUpArray[trumpGivesThumbsUpCounter];
	setTimeout(function () {             
                        
      if (trumpGivesThumbsUpCounter + 1 == trumpGivesThumbsUpArray.length) {
      	secondaryThumbsUpCounter ++;
      	trumpGivesThumbsUpCounter = 0;
      	//console.log(secondaryCounter)
      	if (secondaryThumbsUpCounter == 2) {

      		//once the movetrumpsthumbsup animation reaches its final loop move him out, then send in the begin lesson button.

      		setTimeout(function() {
      			moveTrumpOut();	
      		}, 1000);

      		setTimeout(function() {
      			$('.beginLesson').removeClass('beginLessonHidden');
      			$('.beginLesson').addClass('animated slideInRight');
      		}, 4000);
      		
      	} else {
      		moveTrumpsThumbsUp(trumpGivesThumbsUpArray);
      		console.log(trumpy.height)
      		console.log(trumpy.width)
      	}
      } else {
      	trumpGivesThumbsUpCounter++;   
      	moveTrumpsThumbsUp(trumpGivesThumbsUpArray); //iterate through the loop
      	}                    
   }, 300);
}


var animationCounter = 1;
var currentPosition = - 200;
var trumpyWrapper = document.getElementById('trumpWrapper');

//this function does not use an array to store the src of the animation images, it just changes the value at end of the src to whatever the animation counter is on.

function moveTrumpIn() {
	currentPosition += 2;
	trumpyWrapper.style.right = currentPosition + 'px';
	if (animationCounter < 6) {
		trumpy.src = '../images/trump_walking_' + animationCounter + '.png';
		animationCounter +=1;
	} else {
		animationCounter = 1;
		trumpy.src = '../images/trump_walking_' + animationCounter + '.png';
	}

	if (currentPosition < (window.innerWidth / 2) - 200) {
		requestAnimationFrame(moveTrumpIn);
	}

	else if (currentPosition >= (window.innerWidth / - 200) ) {
		trumpLooksUp(trumpLooksUpArray);
		textBoxFadesInThenOut();
	}
}

var movingOutAnimationCounter = 1;
var movingOutCurrentPosition = window.innerWidth / 2 - 200

function turnTrumpAround() {
	setTimeout(function() {
		trumpy.src = '../images/trump_walking_1.png';
	}, 1000);
	setTimeout(function() {
		trumpy.src = '../images/trump_walking_out_1.png'
	}, 1000);
}

var movingOutAnimationCounter = 1;
var movingOutCurrentPosition = window.innerWidth / 2 - 200

function moveTrumpOut() {
	movingOutCurrentPosition -= 2;
	trumpyWrapper.style.right = movingOutCurrentPosition + 'px';
	if (movingOutAnimationCounter < 9 ) {
		trumpy.src = '../images/trump_walking_out_' + movingOutAnimationCounter + '.png';
		movingOutAnimationCounter += 1;
	} else {
		movingOutAnimationCounter = 1;
		trumpy.src = '../images/trump_walking_out_' + movingOutAnimationCounter + '.png';
	}

	if (movingOutCurrentPosition > -200 ) {
			requestAnimationFrame(moveTrumpOut);
	}
}

	
var $clickMeButton = $('.clickMeButtonUp');

$clickMeButton.mousedown(function() {
	$(this).attr('src', '../images/click_me_down.png');
});

$clickMeButton.mouseup(function() {
	$(this).attr('src', '../images/click_me_up.png');
	$(this).fadeOut(2000);
	$('h1').removeClass('animated slideInRight').addClass('animated bounceOutLeft');
	$('h3').addClass('animated bounceOutLeft');
	moveTrumpIn();

});

$('.beginLesson').mousedown(function() {
	$(this).attr('src', '../images/begin_lesson_down_button.png');
});

$('.beginLesson').mouseup(function() {
	$(this).attr('src', '../images/begin_lesson_up_button.png');
	$(this).removeClass('animated slideInRight').addClass('animated bounceOutLeft');
	setTimeout(function() {
		$('#openingSequence').hide( "slow" );
		$('#reviewPlusNextLesson').show("slow");
	}, 1000);
});

//firstLessonJS

var $china = $('#chinaBox');
var answeredCorrectly = false;
var zhongGuoAudio = document.createElement("audio");
        zhongGuoAudio.src="../audio/china.mp3";
        zhongGuoAudio.volume=0.70;
        zhongGuoAudio.autoPlay=false;
        zhongGuoAudio.preLoad=true;
var fantasticAudio = document.createElement("audio");
	fantasticAudio.src = "../audio/chinaChinaChina.mp3";



$('.square').on('click',function(){
   $('.square').removeClass('selectedSquare');
    $(this).addClass('selectedSquare');
    console.log('clicked')
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
		 fantastic.play();
		 setTimeout(function() {
			$('#firstQuestion').hide( "slow" );
			$('#reviewPlusNextLessonSecondQ').show("slow");
		}, 1000);
	};
});

//secondQuestion JavaScript

var $correctXihuan = $('#correctXihuan');
var answeredCorrectly = false;
var xiHuan = document.createElement('audio');
	xiHuan.setAttribute('src', '../audio/xihuan.mp3');
var chinaChinaChina = document.createElement('audio');
	chinaChinaChina.setAttribute('src', '../audio/fantastic.mp3');

$('#replayAudioButtonSecondQ').on('click', function() {
	xiHuan.play();
	console.log('clicked')
});

$('.squareSecondQ').on('click',function(){
   $('.squareSecondQ').removeClass('selectedSquare');
    $(this).addClass('selectedSquare');
});

function resetButtonIfIncorrectSecondQ() {
	answeredCorrectly = false;
	$('#checkAnswerSecondQ').toggleClass('incorrectAnswer');
	$('#checkAnswerSecondQ').removeClass('correctAnswer');
	$('#placeHolderSecondQ').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#reviewTextSecondQ').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#checkAnswerSecondQ').html('Incorrect')
	
	setTimeout(function() {
		$('#checkAnswerSecondQ').toggleClass('incorrectAnswer');
		$('#checkAnswerSecondQ').css('background', '#FFFFFF !important');
		$('#checkAnswerSecondQ').html('Submit');
	}, 2000);

}

$('#checkAnswerSecondQ').on('click', function() {
	//if nothing has the class selectedSquare { } else 
		if ($correctXihuan.hasClass('selectedSquare') === true) {
			answeredCorrectly = true;
			$(this).removeClass('incorrectAnswer');
			$(this).addClass('correctAnswer');
			$(this).html('Correct!');
			$('#reviewTextSecondQ').html("Combine 喜(happy) and 欢 (delighted) to say 'like'. '喜欢中国'' means 'to like China.'")
			$('#placeHolderSecondQ').html('<div id = "nextButtonSecondQ">Next</div>');
			$('#placeHolderSecondQ').addClass('buttonWrapperSecondQ');
			$('#placeHolderSecondQ').addClass('animated slideInUp');
			$('#reviewTextSecondQ').addClass('animated slideInUp');
			xiHuan.play();


		} else {
			resetButtonIfIncorrectSecondQ();
		}
});

$('#placeHolderSecondQ').mouseup(function() {
	if (answeredCorrectly === true) {
		setTimeout(function() {
			$('#secondQuestion').hide( "slow" );
			$('#reviewPlusNextLessonThirdQ').show("slow");
		}, 1000);
		 chinaChinaChina.play();
	}
});

//thirdQuestion Javascript

var $iBox = $('#iBox');
var answeredCorrectly = false;
var woAudio = document.createElement("audio");
        woAudio.src="../audio/wo.mp3";
        woAudio.volume=0.80;
        woAudio.autoPlay=false;
        woAudio.preLoad=true;
var youreReallyBeautiful = document.createElement("audio");
	youreReallyBeautiful.src = "../audio/you_know_you're_really_beautiful.mp3";



$('.squareThirdQ').on('click',function(){
   $('.squareThirdQ').removeClass('selectedSquare');
    $(this).addClass('selectedSquare');
});

function resetButtonIfIncorrectThirdQ() {
	answeredCorrectly = false;
	$('#checkAnswerThirdQ').toggleClass('incorrectAnswer');
	$('#checkAnswerThirdQ').removeClass('correctAnswer');
	$('#placeHolderThirdQ').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#reviewTextThirdQ').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#checkAnswerThirdQ').html('Incorrect')
	
	setTimeout(function() {
		$('#checkAnswerThirdQ').toggleClass('incorrectAnswer');
		$('#checkAnswerThirdQ').css('background', '#FFFFFF !important');
		$('#checkAnswerThirdQ').html('Submit');
	}, 2000);

}

$('#checkAnswerThirdQ').on('click', function() {
	//if nothing has the class selectedSquare { } else 
		if ($iBox.hasClass('selectedSquare') === true) {
			answeredCorrectly = true;
			woAudio.play();
			$(this).removeClass('incorrectAnswer');
			$(this).addClass('correctAnswer');
			$(this).html('Correct!');
			$('#reviewTextThirdQ').html('我 (Wǒ) means "I". 我喜欢你 (Wǒ xǐhuān nǐ) means "I like you."')
			$('#placeHolderThirdQ').html('<div id = "nextButtonThirdQ">Next</div>');
			$('#placeHolderThirdQ').addClass('buttonWrapperThirdQ');
			$('#placeHolderThirdQ').addClass('animated slideInUp');
			$('#reviewTextThirdQ').addClass('animated slideInUp');


		} else {
			resetButtonIfIncorrectThirdQ();
		}
});

$('#placeHolderThirdQ').mouseup(function() {
	if (answeredCorrectly === true) {
		 youreReallyBeautiful.play();
		 setTimeout(function() {
			$('#thirdQuestion').hide( "slow" );
			$('#reviewPlusNextLessonFourthQ').show("slow");
		}, 1000);
		 //append poop to another div then delete div?
		 //slide in next lesson
	}
});


//fourth Question javsscript


var $correctHen = $('#correctHen');
var answeredCorrectly = false;
var hen = document.createElement("audio");
        hen.src="../audio/hen.mp3";
        hen.volume=0.70;
        hen.autoPlay=false;
        hen.preLoad=true;
var tremendousPotential = document.createElement("audio");
	tremendousPotential.src = "../audio/tremendousPotential.mp3";



$('.squareFourthQ').on('click',function(){
   $('.squareFourthQ').removeClass('selectedSquare');
    $(this).addClass('selectedSquare');
});


$('#replayAudioButtonFourthQ').on('click', function() {
	hen.play()
})

function resetButtonIfIncorrect() {
	answeredCorrectly = false;
	$('#checkAnswerFourthQ').toggleClass('incorrectAnswer');
	$('#checkAnswerFourthQ').removeClass('correctAnswer');
	$('#placeHolderFourthQ').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#checkAnswerFourthQ').html('Incorrect');
	$('#reviewTextFourthQ').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	
	setTimeout(function() {
		$('#checkAnswerFourthQ').toggleClass('incorrectAnswer');
		$('#checkAnswerFourthQ').css('background', '#FFFFFF !important');
		$('#checkAnswerFourthQ').html('Submit');
	}, 2000);

}

$('#checkAnswerFourthQ').on('click', function() {
	//if nothing has the class selectedSquare { } else 
		if ($correctHen.hasClass('selectedSquare') === true) {
			answeredCorrectly = true;
			hen.play();
			$(this).removeClass('incorrectAnswer');
			$(this).addClass('correctAnswer');
			$(this).html('Correct!');
			$('#reviewTextFourthQ').html('很(Hěn) can be used like this: 她很喜欢我 (She really/very much likes me).')
			$('#placeHolderFourthQ').html('<div id = "nextButtonFourthQ">Next</div>');
			$('#placeHolderFourthQ').addClass('buttonWrapperFourthQ');
			$('#placeHolderFourthQ').addClass('animated slideInUp');
			$('#reviewTextFourthQ').addClass('animated slideInUp');


		} else {
			resetButtonIfIncorrect();
		}
});

$('#placeHolderFourthQ').mouseup(function() {
	if (answeredCorrectly === true) {
		setTimeout(function() {
			 $('#fourthQuestion').hide('slow');
			 $('#reviewPlusNextLessonFifthQ').show("slow");
			}, 100);
		 tremendousPotential.play();
	}
});


//fifth Question javascript

var answeredCorrectly = false;
var iVeryVeryVeryMuchLikeChina = document.createElement("audio");
        iVeryVeryVeryMuchLikeChina.src = "../audio/iVeryVeryVeryMuchLikeChina.mp3";
        iVeryVeryVeryMuchLikeChina.volume=0.30;
        iVeryVeryVeryMuchLikeChina.autoPlay=false;
        iVeryVeryVeryMuchLikeChina.preLoad=true;
var congratulations = document.createElement("audio");
	congratulations.src = "../audio/congratulations.mp3";56

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

function resetButtonIfIncorrectFifthQ() {
	answeredCorrectly = false;
	$('#checkAnswerFifthQ').toggleClass('incorrectAnswer');
	$('#checkAnswerFifthQ').removeClass('correctAnswer');
	$('#placeHolderFifthQ').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#reviewTextFifthQ').removeClass('animated slideInUp').addClass('animated fadeOutDown');
	$('#checkAnswerFifthQ').html('Incorrect')
	
	setTimeout(function() {
		$('#checkAnswerFifthQ').toggleClass('incorrectAnswer');
		$('#checkAnswerFifthQ').css('background', '#FFFFFF !important');
		$('#checkAnswerFifthQ').html('Submit');
	}, 2000);

}

function checkAnswer() {
	if ( correctChoices() === true) {
			answeredCorrectly = true;
			iVeryVeryVeryMuchLikeChina.play();
			$('#checkAnswerFifthQ').removeClass('incorrectAnswer');
			$('#checkAnswerFifthQ').addClass('correctAnswer');
			$('#checkAnswerFifthQ').html('Correct!');
			$('#reviewTextFifthQ').html('我很喜欢你 (Wǒ hěn xǐhuān nǐ) means "I really/very much like you."')
			$('#placeHolderFifthQ').html('<div id = "finishButtonFifthQ">Finish</div>');
			$('#placeHolderFifthQ').addClass('buttonWrapperFifthQ');
			$('#placeHolderFifthQ').addClass('animated slideInUp');
			$('#reviewTextFifthQ').addClass('animated slideInUp');
		} else {
			resetButtonIfIncorrectFifthQ();
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


$('#checkAnswerFifthQ').on('click', function() {
	checkAnswer(); 
});

$('#placeHolderFifthQ').mouseup(function() {
	if (answeredCorrectly === true) {
		congratulations.play();
		alert("Congratulations! You have finished your first lesson of Chylingo!\n \nThe idea for Chylingo came to creator Brendan after he spent an evening in front of the tube catching up on some news while simultaneously mulling over this deeply philosophical question:\n\nWhy in God's name does popular language-learning app Duolingo not offer lessons on the most spoken language in the world? Then all of the sudden. BOOM! Chylingo was born! All graphics you see in Chylingo (besides the customized text, thanks @dafonts.com) including the opening Trump animation are all designed by Brendan in Sketch. 'Take your work seriously, not yourself' is a motto Brendan lives by, hence Chylingo! He hopes the Mandarin lesson provided through Chylingo can serve as a gateway for avid language learners and total language noobs alike to pickup learning Mandarin. And hey, if you chuckled to yourself along the way, that's fine too. As an avid Mandarin-learner of almost 9 years, Brendan guarantees that the Mandarin lesson provided through Chylingo is gramatically accurate. Cheerios!");
	}
});

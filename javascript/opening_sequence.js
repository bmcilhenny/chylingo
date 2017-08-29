var trumpy = document.querySelector("#trump");
var requestAnimationFrame = window.requestAnimationFrame;

$(document).ready(function() {
	$('h1').addClass('animated slideInRight');
	//this hides the bottom static update bar
	$('#reviewPlusNextLesson').hide();
	$('#poop').hide();
	$('#secondQuestion').hide();
});

var $startLessonButton = $('.startLessonButtonUp');

$startLessonButton.mousedown(function() {
	$(this).attr('src', '../images/start_lesson_button_down.png');
});

$startLessonButton.mouseup(function() {
	$(this).attr('src', '../images/start_lesson_button_up.png');
	$(this).addClass('animated slideInLeft');
});

var textBox = document.getElementById('explainerBoxWrapper')

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

function daysTillTrumpsStateVisit() {
    var today = new Date();
    var h = today.getHours();
    
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("countDownTillTrumpsChinaTrip").innerHTML = h;
    t = setTimeout(function(){ startTime() }, 300);
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
var secondaryThumbsUpcounter = 0;

//for some reason calling this animation causes the trump img to change height, cause the images are different dimenssions;
function moveTrumpsThumbsUp(trumpGivesThumbsUpArray) {
	trumpy.src = trumpGivesThumbsUpArray[trumpGivesThumbsUpCounter];
	setTimeout(function () {             
                        
      if (trumpGivesThumbsUpCounter + 1 == trumpGivesThumbsUpArray.length) {
      	secondaryThumbsUpcounter ++;
      	trumpGivesThumbsUpCounter = 0;
      	//console.log(secondaryCounter)
      	if (secondaryThumbsUpcounter == 2) {

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
	$('#reviewPlusNextLesson').show();
	$('#poop').show();
	$('#openingSequence').remove();
	//$('#styleSheetz').attr('href', '../css/mandarin_lesson_1.css');
});

//want slow transition to turn around, then 
//call anonymous function to rapidly move off screen like moveTrumpIn()
//apparently if you have transformation as a property of an element and then you remove whatever you are transforming (as in opacity)
//from that element you it is the same as toggling




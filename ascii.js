"use strict";

/* 
		Anmolpreet Sandhu
		87685146
		
		all the functions to make the ascii animation work are in this file.

*/

var playAreaContent;
var timer;
var frames;
var fIndex;


// Enable/disable elements
function disableElements(isDisable){
	document.getElementById("animationOptions").disabled = isDisable;
	document.getElementById("stop").disabled =! isDisable;
	document.getElementById("start").disabled = isDisable;
	document.getElementById("turbo").disabled =! isDisable;
	document.getElementById("turbo").checked =! isDisable;
	document.getElementById("mainPlayArea").readOnly = isDisable;
}


//Start the animation
function startplay() {
	playAreaContent = document.getElementById("mainPlayArea").value; // getting value from main play area
	
	//getting frames	
	frames = playAreaContent.split("=====\n"); 
	if(frames.length <= 1){
		alert("Try again! Please enter the content.");
		return;
	}
	disableElements(true);
	
	fIndex = 0;
	nextFrame(); //getting next frame to be played
	timer = window.setInterval(nextFrame, 250);
}

//stop the animation
function stopplay() {
	window.clearInterval(timer);
	timer = null;
	document.getElementById("mainPlayArea").value = playAreaContent;

	disableElements(false);
}

//getting frames
function nextFrame() {
	document.getElementById("mainPlayArea").value = frames[fIndex];
	fIndex = (fIndex + 1) % frames.length;
}


//run the animation
function runAnimation() {
	var option = document.getElementById("animationOptions").value;
	document.getElementById("mainPlayArea").value = ANIMATIONS[option];
}


//changing the size
function changeSize() {
	var option = document.getElementById("sizeOptions").value;
	(document.getElementById("mainPlayArea")).style.fontSize = option;
}


//set/unset turbo
function setTurbo() {
	var speedLimit;
	if (document.getElementById("turbo").checked)
	{
		speedLimit = document.getElementById("turbo").value;
	}
	else
	{
		speedLimit = 250;
	}
	if(timer !== null)
	{
		window.clearInterval(timer);
		timer = window.setInterval(nextFrame, speedLimit);
	}
}

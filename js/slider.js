var sliderContent = document.querySelectorAll(".slide");
	review = document.querySelectorAll(".review");
	arrowLeft = document.querySelector("#arrow-left");
	arrowRight = document.querySelector("#arrow-right");
	reviewLeft = document.querySelector("#review-left");
	reviewRight = document.querySelector("#review-right");
	current = 0;


//clear all image
function reset() {
	for (var i = 0; i < sliderContent.length; i++) {
		sliderContent[i].style.display = "none";
	}
}

//show 1th slide
function startSlide() {
	reset();
	sliderContent[0].style.display = "block";
}


//show prew
function slideLeft() {
	reset();
	sliderContent[current - 1].style.display = "block";
	current--;
}


//show next
function slideRight() {
	reset();
	sliderContent[current + 1].style.display = "block";
	current++;
}


//left arrow click slide
arrowLeft.addEventListener("click", function(){
	if (current === 0) {
		current = sliderContent.length;
	}
	slideLeft();
});


//right arrow click slide
arrowRight.addEventListener("click", function(){
	if (current === sliderContent.length - 1) {
		current = -1;
	}
	slideRight();
});




startSlide();
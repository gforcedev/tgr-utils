/*read Wiki page for usage!*/
function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
}
function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
}
function exitAnimate(element, animation, reEnterAnimate) {
  element = $(element);
  element.click(
    function() {
      element.addClass('animated ' + animation);
	//wait for animation to finish before removing classes
	window.setTimeout( function(){
	element.removeClass(animation);
	if (reEnterAnimate == "none") {
	element.addClass("hidden");
	} else {
	element.addClass(reEnterAnimate);
			window.setTimeout( function(){
			element.removeClass("animated " + reEnterAnimate);
		}, 2000);
          }
      }, 2000);
    }
  );
}
function animationByOthersClick(clickedElement, animatedElement, animation){
clickedElement = $(clickedElement);
 animatedElement = $(animatedElement);
  clickedElement.click(
    function() {
      animatedElement.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          animatedElement.removeClass('animated ' + animation);
      }, 2000);
    }
  );
}
function animationByOthersHover(hoverElement, animatedElement, animation){
  hoverElement = $(hoverElement);
   animatedElement = $(animatedElement);
    hoverElement.hover(
    function() {
      animatedElement.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          animatedElement.removeClass('animated ' + animation);
      }, 2000);
    }
  );
}
function animate(element, animation) {
	element = $(element);
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
      element.removeClass('animated ' + animation);
	  }, 2000);
}

$(document).ready(function() {
  $('.ryu').mouseenter(function(){
  	$('.ryu-still').hide();
	$('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken(); 
    $('.ryu-ready').hide();
    $('.text').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    	.animate(
		  {'left': '300px'},
		  500,
		  function() {
	    	$(this).hide();
	    	$(this).css('left', '-212px');
	    }
	    );
	})
  .mouseup(function() {
  	$('.ryu-throwing').hide();
  	$('.ryu-cool').hide();
    $('.ryu-ready').show();
  	$('.text').show();
  });
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
$(document).keydown(function(event) {
   	if(event.keyCode == 88) {
   			$('.ryu-cool').show();
   			$('.ryu-ready').hide();
   			$('.ryu-throwing').hide();
   			$('.ryu-still').hide();
   	}
   })
$(document).keyup(function(event){
	if(event.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			}
		});
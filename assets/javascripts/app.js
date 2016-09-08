$(document).ready(function(){
	var $playerInput = $('.player_input');
	var $playerOneName = $('.player1');
	var $board = $('.board');
	var $gameHeader = $('.game_header');
	
	$playerInput.keyup(function(e){
		if(e.keyCode === 13){
			var nameValue = $playerInput.val();
			if(nameValue.length) {
				$gameHeader.text("Welcome To Tic Tac Toe, " + nameValue);
				$playerOneName.slideUp();
				$board.slideDown();
			} else {
				alert('You need to add a name!');
				$playerInput.addClass('error-border');
				$board.slideUp();
				$gameHeader.text('Tic - Tac - Toe');
			}
		}
	});
});
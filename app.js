console.log('Ready to Race!');
$(document).ready(function(){

 $(document).on('keydown', function(event){
let player1Location = $('.player1').css('left').split('px');
let player1LocNum = parseInt(player1Location);

let player2Location = $('.player2').css('left').split('px');
let player2LocNum = parseInt(player2Location);


if (event.keyCode === 90) {
    if (player1LocNum < 1000) {
        $('.player1').animate({ left: '+=50px' });
    } 
	else if (player1LocNum >= 1000){
    	$('player1').stop();
	}
}
	else if (event.keyCode === 77) {
    	if (player2LocNum < 1000) {
        $('.player2').animate({ left: '+=50px' });
    } else if (player2LocNum >= 1000){
    	$('player2').stop();
    }
} 
if (player1LocNum >= 1000 || player2LocNum >= 1000) {
        alert("You win!");
    }

});


 function reset(event) {
   $('.player1').animate({'right':'','left': '0px'});
   $('.player2').animate({'right':'','left': '0px'});
   playerOneMoves = 0;
   playerTwoMoves = 0;
 }
$('button').on('click', reset);

}); //end of all JS.
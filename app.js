console.log('Ready to Race!');
$(document).ready(function(){



 $(document).on('keydown', function(event){
let player1Location = $('.player1').css('left').split('px');
let player1LocNum = parseInt(player1Location);

let player2Location = $('.player2').css('left').split('px');
let player2LocNum = parseInt(player2Location);


if (event.keyCode === 90) {
    if (player1LocNum < 400) {
        $('.player1').animate({ left: '+=50px' });
    } 
}
	else if (event.keyCode === 77) {
    	if (player2LocNum < 400) {
        $('.player2').animate({ left: '+=50px' });
    }
} 
if (player1LocNum >= 400 || player2LocNum >= 400) {
        alert("You win!");
    }

});


}); //end of all JS.
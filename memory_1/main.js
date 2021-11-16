$(document).ready( () => {
	$('#tabs').tabs();
})

//Array 


function turn(){

	document.querySelectorAll('.back').onclick = () => {
		console.log('this clickec.')
	}
}

function playGame(){
	
	var pictures = ['images/back.png', 'images/blank.png', 'images/card_1.png', 'images/card_2.png', 'images/card_3.png', 'images/card_4'];

	document.getElementById("back_card").src = pictures[4];
	turn();

}

function save(){
	console.log('this button is clicked.')

	let name = document.getElementById('player_name').value;
	document.getElementById('player').innerText = name;

	document.getElementById('high_score').innerHTML = 'High Score: ';
	document.getElementById('correct').innerHTML = 'Correct: ';

}
$(document).ready( () => {
	$('#tabs').tabs();
})
//Array 

var picturesArray = [{
		name: 'beach_chair',
		images: 'images/card_1.png',
	},
	{
		name: 'bird',
		images: 'images/card_2.png',
	},
	{
		name: 'bird_apple',
		images: 'images/card_3.png',
	},
	{
		name: 'flower',
		images: 'images/card_4.png',
	},
];

// Variables

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;

const game = document.getElementById('game')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)

let gameGrid = picturesArray.concat(picturesArray);

gameGrid.sort(() => 0.5 - Math.random());



gameGrid.forEach((item) => {
	// Create a div
	const card = document.createElement('div')
  
	// Apply a card class to that div
	card.classList.add('card')
  
	// Set the data-name attribute of the div to the cardsArray name
	card.dataset.name = item.name
  
	// Apply the background image of the div to the cardsArray image
	card.style.backgroundImage = `url(${item.images})`
  
	// Append the div to the grid section
	grid.appendChild(card)
  });

  grid.addEventListener('click', function (event){
	  let clicked = event.target;

	  if(clicked.nodeName === 'SECTION' || clicked === previousTarget){
		return
	}

	  if(clicked.nodeName === 'section'){
		return;
	  }

	  if(count < 2){
		count++;
		if(count === 1){
			firstGuess = clicked.dataset.name;
			clicked.classList.add('selected');
		}else{
			secondGuess = clicked.dataset.name;
			clicked.classList.add('selected');
		}

		if(firstGuess != '' && secondGuess != ''){
			if(firstGuess === secondGuess){
				match();
				resetGuesses()
			}else {
				resetGuesses()
			}
		}

		previousTarget = clicked;

		
		clicked.classList.add('selected');
	}
  }
)

const resetGuesses = () => {
	firstGuess = '';
	secondGues = '';
	count = 0;

	var selected = document.querySelectorAll('.selected')
	selected.forEach((card) => {
		card.classList.remove('selected');
	})
}

const match = () => {
	let selected = document.querySelectorAll('.selected');
	selected.forEach((card)=> {
		card.classList.add('match');
	})
}

// global variables 

// let firstGuess = '';
// let secondGuess = '';
// let count = 0;
// let previousTarget = null;
// let delay = 1200;

// // Creates the card grid. 

// const game = document.getElementById('game');
// const grid = document.createElement('section');

// grid.setAttribute('class', 'grid');
// game.appendChild(grid);

// gameGrid.forEach((item) => {

// 	// const { name, images } = item;

// 	// Create card element with the name dataset 
// 	const card = document.createElement('div');

// 	card.classList.add('card');
// 	card.dataset.name = item.name;

// 	// create front of card
// 	const front = document.createElement('div');
// 	front.classList.add('front');

// 	// create back of card, which contains
// 	const back = document.createElement('div');
// 	back.classList.add('back');
// 	back.style.backgroundImage = `url(${item.images})`;

// 	// apppend card to the grid, and front and back to each card.
// 	grid.appendChild(card);
// 	card.appendChild(front);
// 	card.appendChild(back);

// });



// function turn(){

// 	let x = document.querySelectorAll('.back').forEach( () => {

// 		var pictures = ['images/back.png', 'images/blank.png', 'images/card_1.png', 'images/card_2.png', 'images/card_3.png', 'images/card_4'];

// 		document.getElementById("back_card").src = pictures[4];
// 	})

// 	console.log(x);
		
// }

// function playGame(){
	
// 	var pictures = ['images/back.png', 'images/blank.png', 'images/card_1.png', 'images/card_2.png', 'images/card_3.png', 'images/card_4'];

// 	document.getElementById("back_card").src = pictures[4];
// 	turn();

// }

// function save(){
// 	console.log('this button is clicked.')

// 	let name = document.getElementById('player_name').value;
// 	document.getElementById('player').innerText = name;

// 	document.getElementById('high_score').innerHTML = 'High Score: ';
// 	document.getElementById('correct').innerHTML = 'Correct: ';

// }
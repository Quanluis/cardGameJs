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
	{
		name: 'joker',
		images: 'images/card_5.png',
	},
	{
		name: 'coffee',
		images: 'images/card_6.png',
	},
	{
		name: 'egg',
		images: 'images/card_7.png',
	},
	{
		name: 'fire',
		images: 'images/card_8.png',
	},
	{
		name: 'giraffe',
		images: 'images/card_9.png',
	},
	{
		name: 'glacier',
		images: 'images/card_10.png',
	},
	{
		name: 'clover',
		images: 'images/card_11.png',
	},
	{
		name: 'ice',
		images: 'images/card_12.png',
	},
	{
		name: 'orange',
		images: 'images/card_13.png',
	},
	{
		name: 'oranges',
		images: 'images/card_14.png',
	},
	{
		name: 'penguin',
		images: 'images/card_15.png',
	},
	{
		name: 'pinkFlower',
		images: 'images/card_16.png',
	},
	{
		name: 'peach',
		images: 'images/card_17.png',
	},
	{
		name: 'pinkRose',
		images: 'images/card_18.png',
	},
	{
		name: 'sheep',
		images: 'images/card_19.png',
	},
	{
		name: 'snowman',
		images: 'images/card_20.png',
	},
	{
		name: 'teabag',
		images: 'images/card_21.png',
	},
	{
		name: 'tic-tac-toe',
		images: 'images/card_22.png',
	},
	{
		name: 'whale',
		images: 'images/card_23.png',
	},
	{
		name: 'baloons',
		images: 'images/card_24.png',
	},
];

picturesArray = picturesArray.slice(0.4);

let result = localStorage.getItem('result');
let name = localStorage.getItem('name');
document.getElementById('player').innerText = 'Name: ' + name;
document.getElementById('high_score').innerHTML = 'High Score: ';
document.getElementById('correct').innerHTML = 'Correct: ';

if(result === '8'){
	console.log('8 game card')
	picturesArray = picturesArray.slice(0, 4);
}
if(result === '16'){
	console.log('16 game card')
	picturesArray = picturesArray.slice(0, 8);
}
if(result === '24'){
	console.log('24 game card')
	picturesArray = picturesArray.slice(0, 12);
}
if(result === '32'){
	console.log('32 game card')
	picturesArray = picturesArray.slice(0, 16);
}
if(result === '40'){
	console.log('40 game card')
	picturesArray = picturesArray.slice(0, 20);
}
if(result === '48'){
	console.log('48 game card')
	picturesArray = picturesArray.slice(0, 24);
}

// Variables

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1000;

const game = document.getElementById('game')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)

let gameGrid = picturesArray.concat(picturesArray);

gameGrid.sort(() => 0.5 - Math.random());

const selectGame = () => {
	document.getElementById('num_cards').onselect( () => {
		console.log('this works');
	}) 
}


gameGrid.forEach((item) => {
	// Create a card element
	const card = document.createElement('div')
  	card.classList.add('card')
  	card.dataset.name = item.name

	//Create front of the card. 

	const front = document.createElement('div');
	front.classList.add('front');

	//Create back of card
	const back = document.createElement('div');
	back.classList.add('back');
	back.style.backgroundImage = `url(${item.images})`
  
	// Append the div to the grid section
	grid.appendChild(card)
	card.appendChild(front);
	card.appendChild(back);
  });

  grid.addEventListener('click', function (event){
	  let clicked = event.target;

	  if(clicked.nodeName === 'SECTION' || 
	  	clicked === previousTarget ||
		clicked.parentNode.classList.contains('selected')){
		return
	}

	  if(clicked.nodeName === 'section'){
		return;
	  }

	  if(count < 2){
		count++;
		if(count === 1){
			firstGuess = clicked.parentNode.dataset.name;
			clicked.parentNode.classList.add('selected');
		}else{
			secondGuess = clicked.parentNode.dataset.name
			clicked.parentNode.classList.add('selected');
		}

		if(firstGuess != '' && secondGuess != ''){
			if(firstGuess === secondGuess){

			setTimeout(match, delay);
			setTimeout(resetGuesses, delay);

			}else {
			setTimeout(resetGuesses, delay)
			}
		}

		previousTarget = clicked;

		
		clicked.classList.add('selected');
	}
  }
)

const resetGuesses = () => {
	firstGuess = '';
	secondGuess = '';
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

function save(){
	console.log('this button is clicked.')

	let name = document.getElementById('player_name').value;

	var selectedElem = document.getElementById('num_cards');

	var result = selectedElem.options[selectedElem.selectedIndex].value;

	window.location.reload(true);
	localStorage.setItem('name', name);
	localStorage.setItem('result', result);

	return result;
}

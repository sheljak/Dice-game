var scores, roundScore, activePlayer, gamePlaing;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
	if (gamePlaing){
	//1. Dice scores
	var dice = Math.floor (Math.random() *6) + 1;
	
	//2. Display results
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	
	//3. Update the result If dice Not 1 or two 6 in a row.
	if (dice !== 1 || (dice ===6 && lastDice ===6)){
		
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer).textContent = '0';
		nextPlayer();
		//Add score
		roundScore += dice;
		document.querySelector ('#current-' + activePlayer).textContent = roundScore;
	} else {
		nextPlayer();
	}
		
		lastDice = dice;
	}
	

});
	
	document.querySelector('.btn-hold').addEventListener('click', function(){
		if (gamePlaing){
		
		//Add current score to global score
		scores[activePlayer] += roundScore;
		
		//Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		
		// Check if player won the game
		if (scores[activePlayer] >= 100) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaing = false;
			
		} else {
		//Next player
		nextPlayer();
		}
		
		}
		
	});
	
function nextPlayer(){
		//Change player
		activePlayer === 0 ? activePlayer = 1  : activePlayer = 0;
		roundScore = 0;
		//Add to current counter
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		
		//Make active players changes
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		//Hide dice between players
		document.querySelector('.dice').style.display = 'none';
};
	
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
		scores = [0,0];
		roundScore = 0;
		activePlayer = 0;
		gamePlaing = true;
	
		document.querySelector('.dice').style.display = 'none';

		document.getElementById('score-0').textContent = '0';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.getElementById('name-0').textContent = ('Player 1');
		document.getElementById('name-1').textContent = ('Player 2');
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		
		document.querySelector('.player-0-panel').classList.add('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		
		
}
